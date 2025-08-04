import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string): boolean {
    const layers = ['app', 'shared', 'features', 'widgets', 'entities', 'pages']
    return layers.some(layer => value.startsWith(layer))
}

files.forEach(file => {
    const importDeclarations = file.getImportDeclarations()
    const exportDeclarations = file.getExportDeclarations()

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()
        if (isAbsolute(value)) {
            // importDeclaration.setModuleSpecifier('@/' + value)
            console.log(value);
        }
    })

    exportDeclarations.forEach(exportDeclaration => {
        const value = exportDeclaration.getModuleSpecifierValue()
        if (value && isAbsolute(value)) {
            exportDeclaration.setModuleSpecifier('@/' + value)
        }
    })

})

project.save()