require('cypress-wait-until');

import 'cypress-real-events/support';
import 'cypress-file-upload';
import './commands/config_commands';
import './commands/Faker_Petlov';
import './commands/Swaglabs/login';
import './commands/Petlov/Petlov_commands';
import './commands/Bugereats/Bugereats_commands';

Cypress.ElementSelector.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
});

if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;
    if ( app && !app.document.head.querySelector("[data-hide-command-log-request]"))
    {
        const style = app.document.createElement("style");
        style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    }
};