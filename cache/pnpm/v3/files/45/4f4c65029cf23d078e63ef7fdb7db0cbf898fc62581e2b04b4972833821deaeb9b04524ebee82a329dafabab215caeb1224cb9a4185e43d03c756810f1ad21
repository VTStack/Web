"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const ast_utils_1 = require("@nrwl/workspace/src/utils/ast-utils");
const path_1 = require("path");
const typescript_1 = require("typescript");
const ignore_1 = require("ignore");
function update() {
    return (0, schematics_1.chain)([
        (0, workspace_1.updatePackagesInPackageJson)((0, path_1.join)(__dirname, '../../../', 'migrations.json'), '10.0.0'),
        (0, workspace_1.formatFiles)(),
        updateImports,
        removeObsoletePackages,
        (_, context) => {
            console.info('NX We upgraded Nest.js to v7. Make sure to read the migration guide: https://docs.nestjs.com/migration-guide');
        },
    ]);
}
exports.default = update;
function removeObsoletePackages() {
    return (0, workspace_1.updateJsonInTree)('package.json', (json) => {
        if (json.dependencies && json.dependencies['type-graphql']) {
            delete json.dependencies['type-graphql'];
        }
        return json;
    });
}
function updateImports(host) {
    let ig = (0, ignore_1.default)();
    if (host.exists('.gitignore')) {
        ig = ig.add(host.read('.gitignore').toString());
    }
    host.visit((path) => {
        if (ig.ignores((0, path_1.relative)('/', path)) || !/\.ts?$/.test(path)) {
            return;
        }
        const sourceFile = (0, typescript_1.createSourceFile)(path, host.read(path).toString(), typescript_1.ScriptTarget.Latest, true);
        const changes = [];
        sourceFile.statements.forEach((statement) => {
            if ((0, typescript_1.isImportDeclaration)(statement) &&
                (0, typescript_1.isStringLiteral)(statement.moduleSpecifier)) {
                const nodeText = statement.moduleSpecifier.getText(sourceFile);
                const modulePath = nodeText.slice(1, -1);
                if (modulePath === 'type-graphql') {
                    changes.push(new ast_utils_1.ReplaceChange(path, statement.moduleSpecifier.getStart(sourceFile), nodeText, `'@nestjs/graphql'`));
                }
            }
        });
        (0, workspace_1.insert)(host, path, changes);
    });
}
//# sourceMappingURL=update-10-0-0.js.map