"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentCypressSchematic = exports.createComponentSpecFile = exports.getArgsDefaultValue = exports.componentCypressGenerator = void 0;
const ast_utils_1 = require("../../utils/ast-utils");
const ts = require("typescript");
const devkit_1 = require("@nrwl/devkit");
function componentCypressGenerator(host, schema) {
    createComponentSpecFile(host, schema);
}
exports.componentCypressGenerator = componentCypressGenerator;
// TODO: candidate to refactor with the angular component story
function getArgsDefaultValue(property) {
    const typeNameToDefault = {
        [ts.SyntaxKind.StringKeyword]: '',
        [ts.SyntaxKind.NumberKeyword]: 0,
        [ts.SyntaxKind.BooleanKeyword]: false,
    };
    const resolvedValue = typeNameToDefault[property];
    if (typeof resolvedValue === undefined) {
        return '';
    }
    else if (typeof resolvedValue === 'string') {
        return resolvedValue.replace(/\s/g, '+');
    }
    else {
        return resolvedValue;
    }
}
exports.getArgsDefaultValue = getArgsDefaultValue;
function createComponentSpecFile(tree, { project, componentPath, js, cypressProject }) {
    const e2eProjectName = cypressProject || `${project}-e2e`;
    const projects = (0, devkit_1.getProjects)(tree);
    const e2eLibIntegrationFolderPath = `${projects.get(e2eProjectName).sourceRoot}/integration`;
    const proj = projects.get(project);
    const componentFilePath = (0, devkit_1.joinPathFragments)(proj.sourceRoot, componentPath);
    const componentName = componentFilePath
        .slice(componentFilePath.lastIndexOf('/') + 1)
        .replace('.tsx', '')
        .replace('.jsx', '')
        .replace('.js', '');
    const contents = tree.read(componentFilePath, 'utf-8');
    if (contents === null) {
        throw new Error(`Failed to read ${componentFilePath}`);
    }
    const sourceFile = ts.createSourceFile(componentFilePath, contents, ts.ScriptTarget.Latest, true);
    const cmpDeclaration = (0, ast_utils_1.getComponentName)(sourceFile);
    if (!cmpDeclaration) {
        throw new Error(`Could not find any React component in file ${componentFilePath}`);
    }
    const propsInterface = (0, ast_utils_1.getComponentPropsInterface)(sourceFile);
    let props = [];
    if (propsInterface) {
        props = propsInterface.members.map((member) => {
            return {
                name: member.name.text,
                defaultValue: getArgsDefaultValue(member.type.kind),
            };
        });
    }
    (0, devkit_1.generateFiles)(tree, (0, devkit_1.joinPathFragments)(__dirname, './files'), `${e2eLibIntegrationFolderPath}/${componentName}`, {
        projectName: project,
        componentName,
        componentSelector: cmpDeclaration.name.text,
        props,
        fileExt: js ? 'js' : 'ts',
    });
}
exports.createComponentSpecFile = createComponentSpecFile;
exports.default = componentCypressGenerator;
exports.componentCypressSchematic = (0, devkit_1.convertNxGenerator)(componentCypressGenerator);
//# sourceMappingURL=component-cypress-spec.js.map