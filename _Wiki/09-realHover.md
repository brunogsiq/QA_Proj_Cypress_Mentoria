O efeito só aparece quando o mouse realmente entra no campo, e o Cypress não simula isso bem
🔁 Alternativa: usar realHover da biblioteca cypress-real-events

Essa lib simula o hover de forma mais real (com eventos nativos de mouse).

npm install --save-dev cypress-real-events

import 'cypress-real-events/support';

cy.get('.field').realHover();
cy.get('input[name="fullName"]').should('have.css', 'border-bottom-color', 'rgb(0, 128, 0)');