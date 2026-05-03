import { JsxAttribute, Node, Project, ts } from 'ts-morph';
import SyntaxKind = ts.SyntaxKind;

const project = new Project();

const featureNameArg = process.argv[2]; // isArticleRatingEnabled
const flagArg = process.argv[3]; // on/off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

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
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

const replaceToggleFunction = (node: Node) => {
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
};

function isToggleComponent(node: Node): boolean {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === toggleComponentName;
}

const getAttributeNodeByName = (jsxAttribute: JsxAttribute[], name: string) => {
    return jsxAttribute.find((node) => node.getNameNode().getText() === name);
};

const getReplaceComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');

    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');

    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== featureNameArg) {
        return;
    }

    const onValue = getReplaceComponent(onAttribute);

    const offValue = getReplaceComponent(offAttribute);

    if (flagArg === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (flagArg === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceComponent(node);
        }
    });
});

project.save();
