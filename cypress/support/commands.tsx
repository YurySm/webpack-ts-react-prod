/// <reference types="cypress" />
import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/ratiing';
import { ComponentRenderOptions, TestProvider } from '@/shared/lib/tests/componentRender/componentRender';
import { ReactNode } from 'react';
import { mount, MountOptions, MountReturn } from 'cypress/react';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

Cypress.Commands.add('mount', mount);

interface ComponentRenderOptionsForMount extends MountOptions, ComponentRenderOptions {}


Cypress.Commands.overwrite('mount', (originalFn, component: ReactNode, options: ComponentRenderOptionsForMount = {} ) => {
    return originalFn(
        <TestProvider options={ options }>
            {component}
        </TestProvider>,
        options
    );
});


declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount(
                component: ReactNode,
                options?: ComponentRenderOptionsForMount
            ): Chainable<MountReturn>;
        }
    }
}