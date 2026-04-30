import { Project, Node, SyntaxKind } from 'ts-morph';
import * as process from 'node:process';

const project = new Project();

const featureNameArg = process.argv[2]; // isArticleRatingEnabled
const flagArg = process.argv[3]; // on/off

if (!featureNameArg) {
    throw new Error('Введите название фича-флага');
}

if (!flagArg) {
    throw new Error('Укажите состояние фичи on или off');
}

if (flagArg !== 'on' && flagArg !== 'off') {
    throw new Error('Некорректное состояние фичи, укажите on или off');
}

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node): boolean {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) {
                return;
            }

            const featureNameProperty = objectOptions.getProperty('name');
            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== featureNameArg) {
                return;
            }

            if (flagArg === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() || '');
            }

            if (flagArg === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() || '');
            }
        }
    });
});

project.save();
