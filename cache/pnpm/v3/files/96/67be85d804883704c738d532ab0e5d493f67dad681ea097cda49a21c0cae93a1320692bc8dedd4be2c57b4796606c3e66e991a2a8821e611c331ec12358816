"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelp = void 0;
const chalk = require("chalk");
const logger_1 = require("./logger");
function formatOption(name, description, maxPropertyNameLength) {
    const lengthOfKey = Math.max(maxPropertyNameLength + 4, 22);
    return `  --${`${name}                                                 `.slice(0, lengthOfKey)}${description}`;
}
function printHelp(header, schema, meta) {
    const allPositional = Object.keys(schema.properties).filter((key) => {
        const p = schema.properties[key];
        return p['$default'] && p['$default']['$source'] === 'argv';
    });
    const positional = allPositional.length > 0 ? ` [${allPositional[0]}]` : '';
    const maxPropertyNameLength = Object.keys(schema.properties)
        .map((n) => n.length)
        .reduce((a, b) => Math.max(a, b), 0);
    const args = Object.keys(schema.properties)
        .map((name) => {
        const d = schema.properties[name];
        const def = d.default ? ` (default: ${d.default})` : '';
        return formatOption(name, `${d.description}${def}`, maxPropertyNameLength);
    })
        .join('\n');
    const missingFlags = meta.mode === 'generate'
        ? formatOption('dry-run', 'Preview the changes without updating files', maxPropertyNameLength)
        : formatOption('skip-nx-cache', 'Skip the use of Nx cache.', maxPropertyNameLength);
    let linkDescription = null;
    // we need to generalize link generation so it works for non-party-class plugins as well
    if (meta.mode === 'generate' && meta.plugin.startsWith('@nrwl/')) {
        linkDescription = generateLink(meta.plugin, meta.entity, 'generators');
    }
    else if (meta.mode === 'run' && meta.plugin.startsWith('@nrwl/')) {
        linkDescription = generateLink(meta.plugin, meta.entity, 'executors');
    }
    logger_1.logger.info((0, logger_1.stripIndent)(`
${chalk.bold(`${header + positional} [options,...]`)}

${chalk.bold('Options')}:
${args}
${missingFlags}${linkDescription}
  `));
}
exports.printHelp = printHelp;
function generateLink(plugin, entity, type) {
    const link = `https://nx.dev/packages/${plugin.substring(6)}/${type}/${entity}`;
    return chalk.bold(`\n\nFind more information and examples at ${link}`);
}
//# sourceMappingURL=print-help.js.map