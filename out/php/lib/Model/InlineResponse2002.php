<?php
/**
 * InlineResponse2002
 *
 * PHP version 7.2
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: dev@stromdao.com
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.2.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * InlineResponse2002 Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class InlineResponse2002 implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'inline_response_200_2';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'premix' => 'object',
        'postmix' => 'object',
        'dispatch_from' => '\OpenAPI\Client\Model\DispatchLocation[]',
        'dispatch_target' => '\OpenAPI\Client\Model\DispatchLocation[]',
        'timeframe' => '\OpenAPI\Client\Model\InlineResponse2002Timeframe',
        'avg_distance_km' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'premix' => null,
        'postmix' => null,
        'dispatch_from' => null,
        'dispatch_target' => null,
        'timeframe' => null,
        'avg_distance_km' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'premix' => 'premix',
        'postmix' => 'postmix',
        'dispatch_from' => 'dispatch_from',
        'dispatch_target' => 'dispatch_target',
        'timeframe' => 'timeframe',
        'avg_distance_km' => 'avg_distance_km'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'premix' => 'setPremix',
        'postmix' => 'setPostmix',
        'dispatch_from' => 'setDispatchFrom',
        'dispatch_target' => 'setDispatchTarget',
        'timeframe' => 'setTimeframe',
        'avg_distance_km' => 'setAvgDistanceKm'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'premix' => 'getPremix',
        'postmix' => 'getPostmix',
        'dispatch_from' => 'getDispatchFrom',
        'dispatch_target' => 'getDispatchTarget',
        'timeframe' => 'getTimeframe',
        'avg_distance_km' => 'getAvgDistanceKm'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['premix'] = $data['premix'] ?? null;
        $this->container['postmix'] = $data['postmix'] ?? null;
        $this->container['dispatch_from'] = $data['dispatch_from'] ?? null;
        $this->container['dispatch_target'] = $data['dispatch_target'] ?? null;
        $this->container['timeframe'] = $data['timeframe'] ?? null;
        $this->container['avg_distance_km'] = $data['avg_distance_km'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets premix
     *
     * @return object|null
     */
    public function getPremix()
    {
        return $this->container['premix'];
    }

    /**
     * Sets premix
     *
     * @param object|null $premix Green Energy Mix prior to dispatch of given city
     *
     * @return self
     */
    public function setPremix($premix)
    {
        $this->container['premix'] = $premix;

        return $this;
    }

    /**
     * Gets postmix
     *
     * @return object|null
     */
    public function getPostmix()
    {
        return $this->container['postmix'];
    }

    /**
     * Sets postmix
     *
     * @param object|null $postmix Green Energy Mix after dispatch of given city
     *
     * @return self
     */
    public function setPostmix($postmix)
    {
        $this->container['postmix'] = $postmix;

        return $this;
    }

    /**
     * Gets dispatch_from
     *
     * @return \OpenAPI\Client\Model\DispatchLocation[]|null
     */
    public function getDispatchFrom()
    {
        return $this->container['dispatch_from'];
    }

    /**
     * Sets dispatch_from
     *
     * @param \OpenAPI\Client\Model\DispatchLocation[]|null $dispatch_from List of current sources of green energy (into requested location)
     *
     * @return self
     */
    public function setDispatchFrom($dispatch_from)
    {
        $this->container['dispatch_from'] = $dispatch_from;

        return $this;
    }

    /**
     * Gets dispatch_target
     *
     * @return \OpenAPI\Client\Model\DispatchLocation[]|null
     */
    public function getDispatchTarget()
    {
        return $this->container['dispatch_target'];
    }

    /**
     * Sets dispatch_target
     *
     * @param \OpenAPI\Client\Model\DispatchLocation[]|null $dispatch_target List of current targets of green energy (out of requested location)
     *
     * @return self
     */
    public function setDispatchTarget($dispatch_target)
    {
        $this->container['dispatch_target'] = $dispatch_target;

        return $this;
    }

    /**
     * Gets timeframe
     *
     * @return \OpenAPI\Client\Model\InlineResponse2002Timeframe|null
     */
    public function getTimeframe()
    {
        return $this->container['timeframe'];
    }

    /**
     * Sets timeframe
     *
     * @param \OpenAPI\Client\Model\InlineResponse2002Timeframe|null $timeframe timeframe
     *
     * @return self
     */
    public function setTimeframe($timeframe)
    {
        $this->container['timeframe'] = $timeframe;

        return $this;
    }

    /**
     * Gets avg_distance_km
     *
     * @return float|null
     */
    public function getAvgDistanceKm()
    {
        return $this->container['avg_distance_km'];
    }

    /**
     * Sets avg_distance_km
     *
     * @param float|null $avg_distance_km Averaged geospatial distance in kilometers between energy generation and usage at requested location.
     *
     * @return self
     */
    public function setAvgDistanceKm($avg_distance_km)
    {
        $this->container['avg_distance_km'] = $avg_distance_km;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


