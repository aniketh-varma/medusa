/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getPostAuthMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getGetAuthMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getGetAuthEmailMock = () => ({
  exists: faker.helpers.randomize([faker.datatype.boolean(), undefined]),
})

export const getAuthMSW = () => [
  rest.post("*/auth", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostAuthMock())
    )
  }),
  rest.delete("*/auth", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, "Mocked status"))
  }),
  rest.get("*/auth", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetAuthMock())
    )
  }),
  rest.get("*/auth/:email", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetAuthEmailMock())
    )
  }),
]