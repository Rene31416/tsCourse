import { injectable } from "inversify";
import { apiController, Controller, GET } from "ts-lambda-api";

@apiController("/hello-world")
@injectable()
export class HelloWorldController extends Controller {
  @GET()
  public get() {
    return {
      hello: "world",
    };
  }

  @GET("/sub-resource")
  public getSubResource() {
    return {
      hello: "world",
      sub: "resource",
    };
  }
}
