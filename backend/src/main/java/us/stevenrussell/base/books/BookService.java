package us.stevenrussell.base.books;

import edu.emory.mathcs.backport.java.util.Arrays;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

import static us.stevenrussell.base.books.BookStatus.BAD;
import static us.stevenrussell.base.books.BookStatus.GOOD;
import static us.stevenrussell.base.books.BookStatus.OK;

@Stateless
public class BookService {

    @PersistenceContext
    EntityManager em;

    public List<Book> getAllBooks() {
        List<Book> books = em.createQuery("SELECT b FROM Book b",Book.class).getResultList();
        return books;
    }

    public Book findById(long id) {
        Book book = em.find(Book.class, id);
        return book;
    }

    public void saveBook(Book book) {
        em.merge(book);
    }

    public void deleteBook(long id) {
        Book book = em.getReference(Book.class, id);
        em.remove(book);
    }
}
