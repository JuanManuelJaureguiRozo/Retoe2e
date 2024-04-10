describe('Pruebas de Búsqueda en Wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/');
  });

  it('Búsqueda Exitosa - Artificial Intelligence', () => {
    cy.get('#searchInput').type('Artificial intelligence{enter}');
    cy.url().should('include', 'Artificial_intelligence');
    cy.get('h1#firstHeading').should('contain', 'Artificial intelligence');
  });

  it('Búsqueda sin Resultados - Palabra Aleatoria', () => {
    cy.get('#searchInput').type('xxyyzz{enter}');
    cy.url().should('include', 'Special:Search');
    cy.contains(/Did you mean|There were no/);
  });

  it('Búsqueda Exitosa - Quantum Computing', () => {
    cy.get('#searchInput').type('Quantum computing{enter}');
    cy.url().should('include', 'Quantum_computing');
    cy.get('h1#firstHeading').should('contain', 'Quantum computing');
  });

  it('Búsqueda sin Resultados - Palabra Aleatoria', () => {
    cy.get('#searchInput').type('xxyyzzww{enter}');
    cy.url().should('include', 'Special:Search');
    cy.contains(/Did you mean|There were no/);
  });

  it('Búsqueda Exitosa - Machine Learning', () => {
    cy.get('#searchInput').type('Machine learning{enter}');
    cy.url().should('include', 'Machine_learning');
    cy.get('h1#firstHeading').should('contain', 'Machine learning');
  });

  it('Búsqueda sin Resultados - Palabra Aleatoria', () => {
    cy.get('#searchInput').type('xxyyzzvv{enter}');
    cy.url().should('include', 'Special:Search');
    cy.contains(/Did you mean|There were no/);
  });

  it('Búsqueda Exitosa - Materials Science', () => {
    cy.get('#searchInput').type('Materials science{enter}');
    cy.url().should('include', 'Materials_science');
    cy.get('h1#firstHeading').should('contain', 'Materials science');
  });

  it('Búsqueda sin Resultados - Palabra Aleatoria', () => {
    cy.get('#searchInput').type('xxyyzzmm{enter}');
    cy.url().should('include', 'Special:Search');
    cy.contains(/Did you mean|There were no/);
  });
});

  
  
  
  
  
  