import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace fx. */
export namespace fx {

    /** Namespace streaming. */
    namespace streaming {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: fx.streaming.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: fx.streaming.IEmpty): fx.streaming.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link fx.streaming.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fx.streaming.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link fx.streaming.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fx.streaming.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fx.streaming.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fx.streaming.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): fx.streaming.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fx.streaming.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StreamPriceRequest. */
        interface IStreamPriceRequest {

            /** StreamPriceRequest currencyPair */
            currencyPair?: (string|null);

            /** StreamPriceRequest tenor */
            tenor?: (string|null);
        }

        /** Represents a StreamPriceRequest. */
        class StreamPriceRequest implements IStreamPriceRequest {

            /**
             * Constructs a new StreamPriceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: fx.streaming.IStreamPriceRequest);

            /** StreamPriceRequest currencyPair. */
            public currencyPair: string;

            /** StreamPriceRequest tenor. */
            public tenor: string;

            /**
             * Creates a new StreamPriceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StreamPriceRequest instance
             */
            public static create(properties?: fx.streaming.IStreamPriceRequest): fx.streaming.StreamPriceRequest;

            /**
             * Encodes the specified StreamPriceRequest message. Does not implicitly {@link fx.streaming.StreamPriceRequest.verify|verify} messages.
             * @param message StreamPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fx.streaming.IStreamPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StreamPriceRequest message, length delimited. Does not implicitly {@link fx.streaming.StreamPriceRequest.verify|verify} messages.
             * @param message StreamPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fx.streaming.IStreamPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StreamPriceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StreamPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fx.streaming.StreamPriceRequest;

            /**
             * Decodes a StreamPriceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StreamPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fx.streaming.StreamPriceRequest;

            /**
             * Verifies a StreamPriceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StreamPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StreamPriceRequest
             */
            public static fromObject(object: { [k: string]: any }): fx.streaming.StreamPriceRequest;

            /**
             * Creates a plain object from a StreamPriceRequest message. Also converts values to other types if specified.
             * @param message StreamPriceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fx.streaming.StreamPriceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamPriceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StreamPriceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Price. */
        interface IPrice {

            /** Price currencyPair */
            currencyPair?: (string|null);

            /** Price quotes */
            quotes?: (fx.streaming.IQuote[]|null);

            /** Price tenor */
            tenor?: (string|null);

            /** Price timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Price. */
        class Price implements IPrice {

            /**
             * Constructs a new Price.
             * @param [properties] Properties to set
             */
            constructor(properties?: fx.streaming.IPrice);

            /** Price currencyPair. */
            public currencyPair: string;

            /** Price quotes. */
            public quotes: fx.streaming.IQuote[];

            /** Price tenor. */
            public tenor: string;

            /** Price timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Price instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Price instance
             */
            public static create(properties?: fx.streaming.IPrice): fx.streaming.Price;

            /**
             * Encodes the specified Price message. Does not implicitly {@link fx.streaming.Price.verify|verify} messages.
             * @param message Price message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fx.streaming.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Price message, length delimited. Does not implicitly {@link fx.streaming.Price.verify|verify} messages.
             * @param message Price message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fx.streaming.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Price message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fx.streaming.Price;

            /**
             * Decodes a Price message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fx.streaming.Price;

            /**
             * Verifies a Price message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Price message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Price
             */
            public static fromObject(object: { [k: string]: any }): fx.streaming.Price;

            /**
             * Creates a plain object from a Price message. Also converts values to other types if specified.
             * @param message Price
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fx.streaming.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Price to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Price
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Quote. */
        interface IQuote {

            /** Quote quoteId */
            quoteId?: (string|null);

            /** Quote side */
            side?: (fx.streaming.Side|null);

            /** Quote price */
            price?: (string|null);

            /** Quote goodForAmount */
            goodForAmount?: (string|null);
        }

        /** Represents a Quote. */
        class Quote implements IQuote {

            /**
             * Constructs a new Quote.
             * @param [properties] Properties to set
             */
            constructor(properties?: fx.streaming.IQuote);

            /** Quote quoteId. */
            public quoteId: string;

            /** Quote side. */
            public side: fx.streaming.Side;

            /** Quote price. */
            public price: string;

            /** Quote goodForAmount. */
            public goodForAmount: string;

            /**
             * Creates a new Quote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Quote instance
             */
            public static create(properties?: fx.streaming.IQuote): fx.streaming.Quote;

            /**
             * Encodes the specified Quote message. Does not implicitly {@link fx.streaming.Quote.verify|verify} messages.
             * @param message Quote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fx.streaming.IQuote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Quote message, length delimited. Does not implicitly {@link fx.streaming.Quote.verify|verify} messages.
             * @param message Quote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fx.streaming.IQuote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Quote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Quote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fx.streaming.Quote;

            /**
             * Decodes a Quote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Quote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fx.streaming.Quote;

            /**
             * Verifies a Quote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Quote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Quote
             */
            public static fromObject(object: { [k: string]: any }): fx.streaming.Quote;

            /**
             * Creates a plain object from a Quote message. Also converts values to other types if specified.
             * @param message Quote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fx.streaming.Quote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Quote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Quote
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Side enum. */
        enum Side {
            BID = 0,
            ASK = 1
        }

        /** Represents a PriceStreamService */
        class PriceStreamService extends $protobuf.rpc.Service {

            /**
             * Constructs a new PriceStreamService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new PriceStreamService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PriceStreamService;

            /**
             * Calls StreamPrice.
             * @param request StreamPriceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Price
             */
            public streamPrice(request: fx.streaming.IStreamPriceRequest, callback: fx.streaming.PriceStreamService.StreamPriceCallback): void;

            /**
             * Calls StreamPrice.
             * @param request StreamPriceRequest message or plain object
             * @returns Promise
             */
            public streamPrice(request: fx.streaming.IStreamPriceRequest): Promise<fx.streaming.Price>;
        }

        namespace PriceStreamService {

            /**
             * Callback as used by {@link fx.streaming.PriceStreamService#streamPrice}.
             * @param error Error, if any
             * @param [response] Price
             */
            type StreamPriceCallback = (error: (Error|null), response?: fx.streaming.Price) => void;
        }
    }
}
