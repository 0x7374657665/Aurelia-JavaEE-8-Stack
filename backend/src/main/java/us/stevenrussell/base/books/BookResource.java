package us.stevenrussell.base.books;

import javax.ejb.EJB;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("book")
public class BookResource {

    @Inject
    private BookService bookSvc;

    @GET
    @Path("all")
    @Produces(APPLICATION_JSON)
    public Response getAllBooks() {
        List<Book> books = bookSvc.getAllBooks();
        return Response.ok(books).build();
    }

    @POST
    @Consumes(APPLICATION_JSON)
    public Response saveBook(Book book) {
        bookSvc.saveBook(book);
        return Response.ok().build();
    }
}
