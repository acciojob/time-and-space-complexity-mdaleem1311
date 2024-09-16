//your JS code here. If required.
keywordArray.forEach(keyword => {
  cy.get(tag).eq(index)
    .invoke('text')
    .then((text) => {
      expect(text.toLowerCase()).to.include(keyword.toLowerCase());
    });
});