package com.aep.base.login.boundary;

import static com.sun.xml.internal.ws.spi.db.BindingContextFactory.LOGGER;
import java.util.Map;
import java.util.logging.Logger;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import static javax.ws.rs.core.Response.Status.BAD_REQUEST;
import static javax.ws.rs.core.Response.Status.OK;

@Path("login")
public class Login {
    private final static Logger LOGGER = Logger.getLogger(Login.class.getName());
    
    @POST
    @Consumes(APPLICATION_JSON)
    public Response login(Map<String,String> credentials) {
        String username = credentials.getOrDefault("username", "");
        String password = credentials.getOrDefault("password", "");
        
        Status status = BAD_REQUEST;
        if(username.length() > 0 && password.length() > 0) {
            LOGGER.info("Attempting to login " + username);
            status = OK;
        }
        return Response.status(status).build();
    }
    
}
