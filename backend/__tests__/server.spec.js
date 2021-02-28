const supertest = require("supertest");
const app = require("../server");

jest.mock("axios");

//testing rndpoint for getting public feed images
describe("Testing the gallery API", () => {
  it("tests the base route and returns true for status", async () => {
    const response = await supertest(app).get("/api/photos");
    expect(response.status).toBe(200);
    expect(response.body.items).toBeDefined();
  });
});

//testing endpoint for searching images with the 'cat' tag
describe("Testing the search API", () => {
  it("tests the base route and returns true for status", async () => {
    const response = await supertest(app).get("/api/search/cat");
    expect(response.status).toBe(200);
    expect(response.body.photos.photo[0].ispublic).toBe(1);
  });
});

//testing endpoint for searching images with the 'cat' tag with spaces
describe("Testing the search API", () => {
  it("tests the base route and returns true for status", async () => {
    const response = await supertest(app).get("/api/search/    cat");
    expect(response.status).toBe(200);
    expect(response.body.photos.photo[0].ispublic).toBe(1);
  });
});

//testing endpoint for searching images with the 'blue sky' tag with spaces
describe("Testing the search API", () => {
  it("tests the base route and returns true for status", async () => {
    const response = await supertest(app).get(
      "/api/search/    blue    sky    "
    );
    expect(response.status).toBe(200);
    expect(response.body.photos.photo[0].ispublic).toBe(1);
  });
});
