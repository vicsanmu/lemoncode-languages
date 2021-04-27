import { Book } from './models/Book';

export const isBookRead = (books: Book[], title: string): boolean => {
    const isBookReadResult: boolean = books.some((book: Book) => book.title === title && book.isRead);
    return isBookReadResult;
}