package us.stevenrussell.base.hello.boundary;

import javax.json.Json;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("hello")
public class Message {

    @GET
    @Produces(APPLICATION_JSON)
    public Response hello() {
        String message = Json.createObjectBuilder()
                .add("message","Hello from the backend!")
                .build()
                .toString();

        return Response.ok(message).build();
    }
}
