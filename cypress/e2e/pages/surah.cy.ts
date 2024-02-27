describe("Check the Surah Page", () => {
  const surahId = 1;
  const start = 1;
  const to = 7;

  const url = `http://localhost:3000/surah/${surahId}?start=${start}&to=${to}`;

  beforeEach(() => {
    cy.visit(url);
  });

  it("Check API response for Surah Detail", () => {
    const BASE_API_URL = Cypress.env("NEXT_PUBLIC_BASE_API_URL");
    cy.request(
      "GET",
      `${BASE_API_URL}/quran-ayah?start=${start - 1}&limit=${to}&surah=${surahId}`,
    ).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.have.length.greaterThan(0);
    });
  });

  it("Inspect the element for each surah ayah", () => {
    cy.getItem("surah-ayah-container")
      .find("div")
      .should("exist")
      .first()
      .find("p")
      .should("have.length", 3)
      .first()
      .should("have.attr", "dir", "rtl");
  });
});
