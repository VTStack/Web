"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestConfigObject = exports.jestConfigObjectAst = exports.removeProperty = exports.addOrUpdateProperty = void 0;
const ts = require("typescript");
const typescript_1 = require("typescript");
const devkit_1 = require("@nrwl/devkit");
const vm_1 = require("vm");
const path_1 = require("path");
function makeTextToInsert(value, precedingCommaNeeded) {
    return `${precedingCommaNeeded ? ',' : ''}${value}`;
}
function findPropertyAssignment(object, propertyName) {
    return object.properties.find((prop) => {
        if (!(0, typescript_1.isPropertyAssignment)(prop)) {
            return false;
        }
        const propNameText = prop.name.getText();
        if (propNameText.match(/^["'].+["']$/g)) {
            return JSON.parse(propNameText.replace(/'/g, '"')) === propertyName;
        }
        return propNameText === propertyName;
    });
}
function addOrUpdateProperty(tree, object, properties, value, path) {
    const propertyName = properties.shift();
    const propertyAssignment = findPropertyAssignment(object, propertyName);
    const originalContents = tree.read(path, 'utf-8');
    if (propertyAssignment) {
        if (propertyAssignment.initializer.kind === ts.SyntaxKind.StringLiteral ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.NumericLiteral ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.FalseKeyword ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.TrueKeyword) {
            const updatedContents = (0, devkit_1.applyChangesToString)(originalContents, [
                {
                    type: devkit_1.ChangeType.Delete,
                    start: propertyAssignment.initializer.pos,
                    length: propertyAssignment.initializer.getFullText().length,
                },
                {
                    type: devkit_1.ChangeType.Insert,
                    index: propertyAssignment.initializer.pos,
                    text: value,
                },
            ]);
            tree.write(path, updatedContents);
            return;
        }
        if (propertyAssignment.initializer.kind ===
            ts.SyntaxKind.ArrayLiteralExpression) {
            const arrayLiteral = propertyAssignment.initializer;
            if (arrayLiteral.elements.some((element) => {
                return element.getText().replace(/'/g, '"') === value;
            })) {
                return [];
            }
            if (arrayLiteral.elements.length === 0) {
                const updatedContents = (0, devkit_1.applyChangesToString)(originalContents, [
                    {
                        type: devkit_1.ChangeType.Insert,
                        index: arrayLiteral.elements.end,
                        text: value,
                    },
                ]);
                tree.write(path, updatedContents);
                return;
            }
            else {
                const text = makeTextToInsert(value, arrayLiteral.elements.length !== 0 &&
                    !arrayLiteral.elements.hasTrailingComma);
                const updatedContents = (0, devkit_1.applyChangesToString)(originalContents, [
                    {
                        type: devkit_1.ChangeType.Insert,
                        index: arrayLiteral.elements.end,
                        text,
                    },
                ]);
                tree.write(path, updatedContents);
                return;
            }
        }
        else if (propertyAssignment.initializer.kind ===
            ts.SyntaxKind.ObjectLiteralExpression) {
            return addOrUpdateProperty(tree, propertyAssignment.initializer, properties, value, path);
        }
    }
    else {
        if (propertyName === undefined) {
            throw new Error(`Please use dot delimited paths to update an existing object. Eg. object.property `);
        }
        const text = makeTextToInsert(`${JSON.stringify(propertyName)}: ${value}`, object.properties.length !== 0 && !object.properties.hasTrailingComma);
        const updatedContents = (0, devkit_1.applyChangesToString)(originalContents, [
            {
                type: devkit_1.ChangeType.Insert,
                index: object.properties.end,
                text,
            },
        ]);
        tree.write(path, updatedContents);
        return;
    }
}
exports.addOrUpdateProperty = addOrUpdateProperty;
function removeProperty(object, properties) {
    const propertyName = properties.shift();
    const propertyAssignment = findPropertyAssignment(object, propertyName);
    if (propertyAssignment) {
        if (properties.length > 0 &&
            propertyAssignment.initializer.kind ===
                ts.SyntaxKind.ObjectLiteralExpression) {
            return removeProperty(propertyAssignment.initializer, properties);
        }
        return propertyAssignment;
    }
    else {
        return null;
    }
}
exports.removeProperty = removeProperty;
/**
 * Should be used to get the jest config object.
 *
 * @param host
 * @param path
 */
function jestConfigObjectAst(fileContent) {
    const sourceFile = ts.createSourceFile('jest.config.ts', fileContent, ts.ScriptTarget.Latest, true);
    const moduleExportsStatement = sourceFile.statements.find((statement) => (0, typescript_1.isExpressionStatement)(statement) &&
        (0, typescript_1.isBinaryExpression)(statement.expression) &&
        statement.expression.left.getText() === 'module.exports' &&
        statement.expression.operatorToken.kind === typescript_1.SyntaxKind.EqualsToken);
    const moduleExports = moduleExportsStatement
        .expression;
    if (!moduleExports) {
        throw new Error(`
       The provided jest config file does not have the expected 'module.exports' expression. 
       See https://jestjs.io/docs/en/configuration for more details.`);
    }
    if (!ts.isObjectLiteralExpression(moduleExports.right)) {
        throw new Error(`The 'module.exports' expression is not an object literal.`);
    }
    return moduleExports.right;
}
exports.jestConfigObjectAst = jestConfigObjectAst;
/**
 * Returns the jest config object
 * @param host
 * @param path
 */
function jestConfigObject(host, path) {
    const __filename = (0, path_1.join)(host.root, path);
    const contents = host.read(path, 'utf-8');
    let module = { exports: {} };
    // Run the contents of the file with some stuff from this current context
    // The module.exports will be mutated by the contents of the file...
    (0, vm_1.runInContext)(contents, (0, vm_1.createContext)({
        module,
        require,
        process,
        __filename,
        __dirname: (0, path_1.dirname)(__filename),
    }));
    // TODO: jest actually allows defining configs with async functions... we should be able to read that...
    return module.exports;
}
exports.jestConfigObject = jestConfigObject;
//# sourceMappingURL=functions.js.map