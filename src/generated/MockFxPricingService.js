/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const fx = $root.fx = (() => {

    /**
     * Namespace fx.
     * @exports fx
     * @namespace
     */
    const fx = {};

    fx.streaming = (function() {

        /**
         * Namespace streaming.
         * @memberof fx
         * @namespace
         */
        const streaming = {};

        streaming.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof fx.streaming
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof fx.streaming
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {fx.streaming.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof fx.streaming.Empty
             * @static
             * @param {fx.streaming.IEmpty=} [properties] Properties to set
             * @returns {fx.streaming.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link fx.streaming.Empty.verify|verify} messages.
             * @function encode
             * @memberof fx.streaming.Empty
             * @static
             * @param {fx.streaming.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link fx.streaming.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fx.streaming.Empty
             * @static
             * @param {fx.streaming.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof fx.streaming.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fx.streaming.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fx.streaming.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fx.streaming.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fx.streaming.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof fx.streaming.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fx.streaming.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fx.streaming.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.fx.streaming.Empty)
                    return object;
                return new $root.fx.streaming.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fx.streaming.Empty
             * @static
             * @param {fx.streaming.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof fx.streaming.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof fx.streaming.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fx.streaming.Empty";
            };

            return Empty;
        })();

        streaming.StreamPriceRequest = (function() {

            /**
             * Properties of a StreamPriceRequest.
             * @memberof fx.streaming
             * @interface IStreamPriceRequest
             * @property {string|null} [currencyPair] StreamPriceRequest currencyPair
             * @property {string|null} [tenor] StreamPriceRequest tenor
             */

            /**
             * Constructs a new StreamPriceRequest.
             * @memberof fx.streaming
             * @classdesc Represents a StreamPriceRequest.
             * @implements IStreamPriceRequest
             * @constructor
             * @param {fx.streaming.IStreamPriceRequest=} [properties] Properties to set
             */
            function StreamPriceRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamPriceRequest currencyPair.
             * @member {string} currencyPair
             * @memberof fx.streaming.StreamPriceRequest
             * @instance
             */
            StreamPriceRequest.prototype.currencyPair = "";

            /**
             * StreamPriceRequest tenor.
             * @member {string} tenor
             * @memberof fx.streaming.StreamPriceRequest
             * @instance
             */
            StreamPriceRequest.prototype.tenor = "";

            /**
             * Creates a new StreamPriceRequest instance using the specified properties.
             * @function create
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {fx.streaming.IStreamPriceRequest=} [properties] Properties to set
             * @returns {fx.streaming.StreamPriceRequest} StreamPriceRequest instance
             */
            StreamPriceRequest.create = function create(properties) {
                return new StreamPriceRequest(properties);
            };

            /**
             * Encodes the specified StreamPriceRequest message. Does not implicitly {@link fx.streaming.StreamPriceRequest.verify|verify} messages.
             * @function encode
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {fx.streaming.IStreamPriceRequest} message StreamPriceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamPriceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.currencyPair != null && Object.hasOwnProperty.call(message, "currencyPair"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyPair);
                if (message.tenor != null && Object.hasOwnProperty.call(message, "tenor"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.tenor);
                return writer;
            };

            /**
             * Encodes the specified StreamPriceRequest message, length delimited. Does not implicitly {@link fx.streaming.StreamPriceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {fx.streaming.IStreamPriceRequest} message StreamPriceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamPriceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamPriceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fx.streaming.StreamPriceRequest} StreamPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamPriceRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fx.streaming.StreamPriceRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.currencyPair = reader.string();
                            break;
                        }
                    case 2: {
                            message.tenor = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StreamPriceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fx.streaming.StreamPriceRequest} StreamPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamPriceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamPriceRequest message.
             * @function verify
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamPriceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                    if (!$util.isString(message.currencyPair))
                        return "currencyPair: string expected";
                if (message.tenor != null && message.hasOwnProperty("tenor"))
                    if (!$util.isString(message.tenor))
                        return "tenor: string expected";
                return null;
            };

            /**
             * Creates a StreamPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fx.streaming.StreamPriceRequest} StreamPriceRequest
             */
            StreamPriceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.fx.streaming.StreamPriceRequest)
                    return object;
                let message = new $root.fx.streaming.StreamPriceRequest();
                if (object.currencyPair != null)
                    message.currencyPair = String(object.currencyPair);
                if (object.tenor != null)
                    message.tenor = String(object.tenor);
                return message;
            };

            /**
             * Creates a plain object from a StreamPriceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {fx.streaming.StreamPriceRequest} message StreamPriceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamPriceRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.currencyPair = "";
                    object.tenor = "";
                }
                if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                    object.currencyPair = message.currencyPair;
                if (message.tenor != null && message.hasOwnProperty("tenor"))
                    object.tenor = message.tenor;
                return object;
            };

            /**
             * Converts this StreamPriceRequest to JSON.
             * @function toJSON
             * @memberof fx.streaming.StreamPriceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamPriceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StreamPriceRequest
             * @function getTypeUrl
             * @memberof fx.streaming.StreamPriceRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StreamPriceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fx.streaming.StreamPriceRequest";
            };

            return StreamPriceRequest;
        })();

        streaming.Price = (function() {

            /**
             * Properties of a Price.
             * @memberof fx.streaming
             * @interface IPrice
             * @property {string|null} [currencyPair] Price currencyPair
             * @property {Array.<fx.streaming.IQuote>|null} [quotes] Price quotes
             * @property {string|null} [tenor] Price tenor
             * @property {number|Long|null} [timestamp] Price timestamp
             */

            /**
             * Constructs a new Price.
             * @memberof fx.streaming
             * @classdesc Represents a Price.
             * @implements IPrice
             * @constructor
             * @param {fx.streaming.IPrice=} [properties] Properties to set
             */
            function Price(properties) {
                this.quotes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Price currencyPair.
             * @member {string} currencyPair
             * @memberof fx.streaming.Price
             * @instance
             */
            Price.prototype.currencyPair = "";

            /**
             * Price quotes.
             * @member {Array.<fx.streaming.IQuote>} quotes
             * @memberof fx.streaming.Price
             * @instance
             */
            Price.prototype.quotes = $util.emptyArray;

            /**
             * Price tenor.
             * @member {string} tenor
             * @memberof fx.streaming.Price
             * @instance
             */
            Price.prototype.tenor = "";

            /**
             * Price timestamp.
             * @member {number|Long} timestamp
             * @memberof fx.streaming.Price
             * @instance
             */
            Price.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Price instance using the specified properties.
             * @function create
             * @memberof fx.streaming.Price
             * @static
             * @param {fx.streaming.IPrice=} [properties] Properties to set
             * @returns {fx.streaming.Price} Price instance
             */
            Price.create = function create(properties) {
                return new Price(properties);
            };

            /**
             * Encodes the specified Price message. Does not implicitly {@link fx.streaming.Price.verify|verify} messages.
             * @function encode
             * @memberof fx.streaming.Price
             * @static
             * @param {fx.streaming.IPrice} message Price message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Price.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.currencyPair != null && Object.hasOwnProperty.call(message, "currencyPair"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyPair);
                if (message.quotes != null && message.quotes.length)
                    for (let i = 0; i < message.quotes.length; ++i)
                        $root.fx.streaming.Quote.encode(message.quotes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.tenor != null && Object.hasOwnProperty.call(message, "tenor"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tenor);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified Price message, length delimited. Does not implicitly {@link fx.streaming.Price.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fx.streaming.Price
             * @static
             * @param {fx.streaming.IPrice} message Price message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Price.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Price message from the specified reader or buffer.
             * @function decode
             * @memberof fx.streaming.Price
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fx.streaming.Price} Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Price.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fx.streaming.Price();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.currencyPair = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.quotes && message.quotes.length))
                                message.quotes = [];
                            message.quotes.push($root.fx.streaming.Quote.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.tenor = reader.string();
                            break;
                        }
                    case 4: {
                            message.timestamp = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Price message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fx.streaming.Price
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fx.streaming.Price} Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Price.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Price message.
             * @function verify
             * @memberof fx.streaming.Price
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Price.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                    if (!$util.isString(message.currencyPair))
                        return "currencyPair: string expected";
                if (message.quotes != null && message.hasOwnProperty("quotes")) {
                    if (!Array.isArray(message.quotes))
                        return "quotes: array expected";
                    for (let i = 0; i < message.quotes.length; ++i) {
                        let error = $root.fx.streaming.Quote.verify(message.quotes[i]);
                        if (error)
                            return "quotes." + error;
                    }
                }
                if (message.tenor != null && message.hasOwnProperty("tenor"))
                    if (!$util.isString(message.tenor))
                        return "tenor: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a Price message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fx.streaming.Price
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fx.streaming.Price} Price
             */
            Price.fromObject = function fromObject(object) {
                if (object instanceof $root.fx.streaming.Price)
                    return object;
                let message = new $root.fx.streaming.Price();
                if (object.currencyPair != null)
                    message.currencyPair = String(object.currencyPair);
                if (object.quotes) {
                    if (!Array.isArray(object.quotes))
                        throw TypeError(".fx.streaming.Price.quotes: array expected");
                    message.quotes = [];
                    for (let i = 0; i < object.quotes.length; ++i) {
                        if (typeof object.quotes[i] !== "object")
                            throw TypeError(".fx.streaming.Price.quotes: object expected");
                        message.quotes[i] = $root.fx.streaming.Quote.fromObject(object.quotes[i]);
                    }
                }
                if (object.tenor != null)
                    message.tenor = String(object.tenor);
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Price message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fx.streaming.Price
             * @static
             * @param {fx.streaming.Price} message Price
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Price.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.quotes = [];
                if (options.defaults) {
                    object.currencyPair = "";
                    object.tenor = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                    object.currencyPair = message.currencyPair;
                if (message.quotes && message.quotes.length) {
                    object.quotes = [];
                    for (let j = 0; j < message.quotes.length; ++j)
                        object.quotes[j] = $root.fx.streaming.Quote.toObject(message.quotes[j], options);
                }
                if (message.tenor != null && message.hasOwnProperty("tenor"))
                    object.tenor = message.tenor;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this Price to JSON.
             * @function toJSON
             * @memberof fx.streaming.Price
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Price.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Price
             * @function getTypeUrl
             * @memberof fx.streaming.Price
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Price.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fx.streaming.Price";
            };

            return Price;
        })();

        streaming.Quote = (function() {

            /**
             * Properties of a Quote.
             * @memberof fx.streaming
             * @interface IQuote
             * @property {string|null} [quoteId] Quote quoteId
             * @property {fx.streaming.Side|null} [side] Quote side
             * @property {string|null} [price] Quote price
             * @property {string|null} [goodForAmount] Quote goodForAmount
             */

            /**
             * Constructs a new Quote.
             * @memberof fx.streaming
             * @classdesc Represents a Quote.
             * @implements IQuote
             * @constructor
             * @param {fx.streaming.IQuote=} [properties] Properties to set
             */
            function Quote(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Quote quoteId.
             * @member {string} quoteId
             * @memberof fx.streaming.Quote
             * @instance
             */
            Quote.prototype.quoteId = "";

            /**
             * Quote side.
             * @member {fx.streaming.Side} side
             * @memberof fx.streaming.Quote
             * @instance
             */
            Quote.prototype.side = 0;

            /**
             * Quote price.
             * @member {string} price
             * @memberof fx.streaming.Quote
             * @instance
             */
            Quote.prototype.price = "";

            /**
             * Quote goodForAmount.
             * @member {string} goodForAmount
             * @memberof fx.streaming.Quote
             * @instance
             */
            Quote.prototype.goodForAmount = "";

            /**
             * Creates a new Quote instance using the specified properties.
             * @function create
             * @memberof fx.streaming.Quote
             * @static
             * @param {fx.streaming.IQuote=} [properties] Properties to set
             * @returns {fx.streaming.Quote} Quote instance
             */
            Quote.create = function create(properties) {
                return new Quote(properties);
            };

            /**
             * Encodes the specified Quote message. Does not implicitly {@link fx.streaming.Quote.verify|verify} messages.
             * @function encode
             * @memberof fx.streaming.Quote
             * @static
             * @param {fx.streaming.IQuote} message Quote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quote.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quoteId != null && Object.hasOwnProperty.call(message, "quoteId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.quoteId);
                if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.side);
                if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price);
                if (message.goodForAmount != null && Object.hasOwnProperty.call(message, "goodForAmount"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.goodForAmount);
                return writer;
            };

            /**
             * Encodes the specified Quote message, length delimited. Does not implicitly {@link fx.streaming.Quote.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fx.streaming.Quote
             * @static
             * @param {fx.streaming.IQuote} message Quote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quote.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Quote message from the specified reader or buffer.
             * @function decode
             * @memberof fx.streaming.Quote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fx.streaming.Quote} Quote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quote.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fx.streaming.Quote();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.quoteId = reader.string();
                            break;
                        }
                    case 2: {
                            message.side = reader.int32();
                            break;
                        }
                    case 3: {
                            message.price = reader.string();
                            break;
                        }
                    case 4: {
                            message.goodForAmount = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Quote message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fx.streaming.Quote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fx.streaming.Quote} Quote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quote.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Quote message.
             * @function verify
             * @memberof fx.streaming.Quote
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Quote.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quoteId != null && message.hasOwnProperty("quoteId"))
                    if (!$util.isString(message.quoteId))
                        return "quoteId: string expected";
                if (message.side != null && message.hasOwnProperty("side"))
                    switch (message.side) {
                    default:
                        return "side: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.price != null && message.hasOwnProperty("price"))
                    if (!$util.isString(message.price))
                        return "price: string expected";
                if (message.goodForAmount != null && message.hasOwnProperty("goodForAmount"))
                    if (!$util.isString(message.goodForAmount))
                        return "goodForAmount: string expected";
                return null;
            };

            /**
             * Creates a Quote message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fx.streaming.Quote
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fx.streaming.Quote} Quote
             */
            Quote.fromObject = function fromObject(object) {
                if (object instanceof $root.fx.streaming.Quote)
                    return object;
                let message = new $root.fx.streaming.Quote();
                if (object.quoteId != null)
                    message.quoteId = String(object.quoteId);
                switch (object.side) {
                default:
                    if (typeof object.side === "number") {
                        message.side = object.side;
                        break;
                    }
                    break;
                case "BID":
                case 0:
                    message.side = 0;
                    break;
                case "ASK":
                case 1:
                    message.side = 1;
                    break;
                }
                if (object.price != null)
                    message.price = String(object.price);
                if (object.goodForAmount != null)
                    message.goodForAmount = String(object.goodForAmount);
                return message;
            };

            /**
             * Creates a plain object from a Quote message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fx.streaming.Quote
             * @static
             * @param {fx.streaming.Quote} message Quote
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Quote.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.quoteId = "";
                    object.side = options.enums === String ? "BID" : 0;
                    object.price = "";
                    object.goodForAmount = "";
                }
                if (message.quoteId != null && message.hasOwnProperty("quoteId"))
                    object.quoteId = message.quoteId;
                if (message.side != null && message.hasOwnProperty("side"))
                    object.side = options.enums === String ? $root.fx.streaming.Side[message.side] === undefined ? message.side : $root.fx.streaming.Side[message.side] : message.side;
                if (message.price != null && message.hasOwnProperty("price"))
                    object.price = message.price;
                if (message.goodForAmount != null && message.hasOwnProperty("goodForAmount"))
                    object.goodForAmount = message.goodForAmount;
                return object;
            };

            /**
             * Converts this Quote to JSON.
             * @function toJSON
             * @memberof fx.streaming.Quote
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Quote.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Quote
             * @function getTypeUrl
             * @memberof fx.streaming.Quote
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Quote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fx.streaming.Quote";
            };

            return Quote;
        })();

        /**
         * Side enum.
         * @name fx.streaming.Side
         * @enum {number}
         * @property {number} BID=0 BID value
         * @property {number} ASK=1 ASK value
         */
        streaming.Side = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BID"] = 0;
            values[valuesById[1] = "ASK"] = 1;
            return values;
        })();

        streaming.PriceStreamService = (function() {

            /**
             * Constructs a new PriceStreamService service.
             * @memberof fx.streaming
             * @classdesc Represents a PriceStreamService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function PriceStreamService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (PriceStreamService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PriceStreamService;

            /**
             * Creates new PriceStreamService service using the specified rpc implementation.
             * @function create
             * @memberof fx.streaming.PriceStreamService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {PriceStreamService} RPC service. Useful where requests and/or responses are streamed.
             */
            PriceStreamService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link fx.streaming.PriceStreamService#streamPrice}.
             * @memberof fx.streaming.PriceStreamService
             * @typedef StreamPriceCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {fx.streaming.Price} [response] Price
             */

            /**
             * Calls StreamPrice.
             * @function streamPrice
             * @memberof fx.streaming.PriceStreamService
             * @instance
             * @param {fx.streaming.IStreamPriceRequest} request StreamPriceRequest message or plain object
             * @param {fx.streaming.PriceStreamService.StreamPriceCallback} callback Node-style callback called with the error, if any, and Price
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(PriceStreamService.prototype.streamPrice = function streamPrice(request, callback) {
                return this.rpcCall(streamPrice, $root.fx.streaming.StreamPriceRequest, $root.fx.streaming.Price, request, callback);
            }, "name", { value: "StreamPrice" });

            /**
             * Calls StreamPrice.
             * @function streamPrice
             * @memberof fx.streaming.PriceStreamService
             * @instance
             * @param {fx.streaming.IStreamPriceRequest} request StreamPriceRequest message or plain object
             * @returns {Promise<fx.streaming.Price>} Promise
             * @variation 2
             */

            return PriceStreamService;
        })();

        return streaming;
    })();

    return fx;
})();

export { $root as default };
