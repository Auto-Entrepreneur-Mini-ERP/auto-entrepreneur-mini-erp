import { useState } from "react";
import { quoteApi } from "../api/quote.api";
import type { CreateQuoteInput, Quote, QuoteLineInput, UpdateQuoteInput } from "../types/quote.types";

export const useQuote = () => {
    const [errors, setErrors] = useState<string>();
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [quotesCount, setQuotesCount] = useState<number>(0);
    const [quote, setQuote] = useState<Quote>();

    const fetchquotes = async (page: number, limit: number) => {
        const response = await quoteApi.getAllQuotes(page, limit);

        if(response.data) {
            setQuotes(response.data.quotes);
            setQuotesCount(response.data.count);
        }
    };

    const getOneQuote = async (quoteId: string) => {
        const response = await quoteApi.getOneQuote(quoteId);
        
        if(response.data) {
            setQuote(response.data);
        }
    };

    const getCustomersNames = async (customerName: string) => {
        const response = await quoteApi.getAllCustomers(customerName);        
        return response;
    }

    const getArticlesNames = async (articleName: string) => {
        const response = await quoteApi.getAllArticles(articleName);
        return response;
    }

    const createQuote = async (quoteData: CreateQuoteInput, quoteLinesData: QuoteLineInput[]) => {
        const response = await quoteApi.createQuote(quoteData, quoteLinesData);

        if(response.data && response.data.statusCode && response.data.statusCode !== 200){
            return setErrors(response.data.message);
        }
        return response;
    }

    const updateQuote = async (quoteId: string, quoteData: UpdateQuoteInput) => {
        const response = await quoteApi.updateQuote(quoteId, quoteData);
        
        if(response.data && response.data.statusCode && response.data.statusCode !== 200){
            setErrors(response.data.message);
            return;
        }
        return response;
    }

    const acceptQuote = async (quoteId: string) => {
        const response = await quoteApi.acceptQuote(quoteId as string);

        if(response.data && response.data.statusCode && response.data.statusCode !== 200){
            setErrors(response.data.message);
        }
        return response;
    }

    const refuseQuote = async (quoteId: string) => {
        const response = await quoteApi.refuseQuote(quoteId as string);

        if(response.data && response.data.statusCode && response.data.statusCode !== 200){
            setErrors(response.data.message);
        }
        return response;
    }

    return {
        errors,
        quotes,
        quotesCount,
        quote,
        fetchquotes,
        getOneQuote,
        getCustomersNames,
        getArticlesNames,
        createQuote,
        updateQuote,
        acceptQuote,
        refuseQuote
    }
};
