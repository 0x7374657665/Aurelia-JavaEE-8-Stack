package us.stevenrussell.base.books;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.PROPERTY)
public class Book {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private int rating;
    private BookStatus status;

    public Book(String title, String description, int rating, BookStatus status) {
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.status = status;
    }


    public Book() {
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getRating() {
        return rating;
    }

    public BookStatus getStatus() {
        return status;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setStatus(BookStatus status) {
        this.status = status;
    }
}
