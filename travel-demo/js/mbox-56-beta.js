

// compression: 1

var mboxCopyright = "Copyright 1996-2014. Adobe Systems Incorporated. All rights reserved.";
var TNT = TNT || {};
TNT._internal = TNT._internal || {};
TNT._internal.nestedMboxes = [];

TNT._internal._settings = {
  "companyName": "Test&amp;Target",
  "isProduction": false,
  "adminUrl": "http://admin10.testandtarget.omniture.com/admin/",
  "clientCode": "adobesummit2015",
  "serverHost": "adobesummit2015.tt.omtrdc.net",
  "mboxTimeout": 15000,
  "mboxFactoryDisabledTimeout": 60 * 60,
  "sessionExpirationTimeout": 31 * 60,
  "experienceManagerDisabledTimeout": 30 * 60,
  "experienceManagerTimeout": 5000,
  "tntIdLifetime": 2592000,
  "crossDomain": "disabled",
  "trafficDuration": 10368000,
  "trafficLevelPercentage": 100,
  "clientSessionIdSupport": false,
  "clientTntIdSupport": false,
  "passPageParameters": true,
  "usePersistentCookies": true,
  "crossDomainEnabled": false,
  "crossDomainXOnly": false,
  "imsOrgId": "",
  "includeExperienceManagerPlugin": false,
  "globalMboxName": "target-global-mbox",
  "globalMboxLocationDomId": "",
  "globalMboxAutoCreate": true,
  "experienceManagerPluginUrl": "//cdn.tt.omtrdc.net/cdn/target.js",
  "siteCatalystPluginName": "tt",
  "includeSiteCatalystPlugin": false,
  "mboxVersion": 56,
  "mboxIsSupportedFunction": function() {
    return true;
  },
  "clientJavascriptFunction": function() {
    
  },
  "parametersFunction": function() {
    return "";
  },
  "cookieDomainFunction": function() {
    return mboxCookiePageDomain();
  }
};

TNT._internal._params = {};
TNT._internal._params._page = "mboxPage";
TNT._internal._params._marketingCloudVisitorId = "mboxMCGVID";
TNT._internal._params._audienceManagerLocationHint = "mboxMCGLH";
TNT._internal._params._audienceManagerBlob = "mboxAAMB";
TNT._internal._params._analyticsVisitorId = "mboxMCAVID";
TNT._internal._params._supplementalDataId = "mboxMCSDID";
TNT._internal._params._count = "mboxCount";
TNT._internal._params._host = "mboxHost";
TNT._internal._params._mboxFactoryId = "mboxFactoryId";
TNT._internal._params._tntId = "mboxPC";
TNT._internal._params._screenHeight = "screenHeight";
TNT._internal._params._screenWidth = "screenWidth";
TNT._internal._params._browserWidth = "browserWidth";
TNT._internal._params._browserHeight = "browserHeight";
TNT._internal._params._browserTimeOffset = "browserTimeOffset";
TNT._internal._params._screenColorDepth = "colorDepth";
TNT._internal._params._crossDomain = "mboxXDomain";
TNT._internal._params._url = "mboxURL";
TNT._internal._params._referrer = "mboxReferrer";
TNT._internal._params._mboxVersion = "mboxVersion";
TNT._internal._params._mboxName = "mbox";
TNT._internal._params._mboxId = "mboxId";
TNT._internal._params._domLoaded = "mboxDOMLoaded";
TNT._internal._params._time = "mboxTime";
TNT._internal._params._siteCatalystPluginVersion = "scPluginVersion";

TNT._internal._pageParams = {};
TNT._internal._pageParams._disable = "mboxDisable";
TNT._internal._pageParams._sessionId = "mboxSession";
TNT._internal._pageParams._environment = "mboxEnv";
TNT._internal._pageParams._debug = "mboxDebug";

TNT._internal._cookies = {};
TNT._internal._cookies._disable = "disable";
TNT._internal._cookies._sessionId = "session";
TNT._internal._cookies._tntId = "PC";
TNT._internal._cookies._trafficLevel = "level";
TNT._internal._cookies._check = "check";
TNT._internal._cookies._debug = "debug";
TNT._internal._cookies._experienceManagerDisabled = "em-disabled";

TNT._internal._constants = {};
TNT._internal._constants._defaultFactoryId = "default";
TNT._internal._constants._cookieNamePrefix = "mbox";
TNT._internal._constants._divImportPrefix = "mboxImported-";
TNT._internal._constants._millisInMinute = 60000;
TNT._internal._constants._divDefaultClass = "mboxDefault";
TNT._internal._constants._divMarkerPrefix = "mboxMarker-";
TNT._internal._constants._mboxNameMaxLength = 250;
TNT._internal._constants._siteCatalystPluginVersion = 1;

TNT.getGlobalMboxName = function () {
  return TNT._internal._settings.globalMboxName;
};

TNT.getGlobalMboxLocation = function () {
  return TNT._internal._settings.globalMboxLocationDomId;
};

TNT.isAutoCreateGlobalMbox = function () {
  return TNT._internal._settings.globalMboxAutoCreate;
};

TNT.getClientMboxExtraParameters = function () {
  return TNT._internal._settings.parametersFunction();
};

TNT._internal._helper = {};

TNT._internal._helper._isUndefined = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object Undefined]';
};

TNT._internal._helper._isNull = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object Null]';
};

TNT._internal._helper._isEmpty = function(_value) {
  var _helper = TNT._internal._helper;

  if (_helper._isUndefined(_value) || _helper._isNull(_value)) {
    return true;
  }

  return _value.length === 0;
};

TNT._internal._helper._isFunction = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object Function]';
};

TNT._internal._helper._isArray = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object Array]';
};

TNT._internal._helper._isString = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object String]';
};

TNT._internal._helper._isObject = function(_value) {
  var _str = {}.toString;

  return _str.call(_value) === '[object Object]';
};

TNT.getTargetPageParameters = function () {
  var _helper = TNT._internal._helper;
  var _targetPageParams = window.targetPageParams;

  if (!_helper._isFunction(_targetPageParams)) {
    return [];
  }

  var _result = null;

  try {
    _result = _targetPageParams();
  } catch (_ignore) {}

  if (_helper._isNull(_result)) {
    return [];
  }

  if (_helper._isArray(_result)) {
    return _result;
  }

  if (_helper._isString(_result) && !_helper._isEmpty(_result)) {
    return TNT._internal._extractParamsFromQueryString(_result);
  }

  if (_helper._isObject(_result)) {
    return TNT._internal._extractParamsFromObject(_result, []);
  }

  return [];
};

TNT._internal._extractParamsFromQueryString = function(_queryString) {
  var _result = [];
  var _regex = /([^&=]+)=([^&]*)/g;
  var _decode = decodeURIComponent;
  var _match = _regex.exec(_queryString);

  while (_match) {
    _result.push([_decode(_match[1]), _decode(_match[2])].join('='));
    _match = _regex.exec(_queryString);
  }

  return _result;
};

TNT._internal._extractParamsFromObject = function (_obj, _keys) {
  var _helper = TNT._internal._helper;
  var _result = [];

  for (var _key in _obj) {
    if (!_obj.hasOwnProperty(_key)) {
      continue;
    }

    var _value = _obj[_key];

    if (_helper._isObject(_value)) {
      _keys.push(_key);
      _result = _result.concat(TNT._internal._extractParamsFromObject(_value, _keys));
      _keys.pop();
    } else {
      if (_keys.length > 0) {
        _result.push([_keys.concat(_key).join('.'), _value].join('='));
      } else {
        _result.push([_key, _value].join('='));
      }
    }
  }

  return _result;
};

/**
 * Builds the url of a request given the mbox server host, client code
 * and server type.
 * @PrivateClass
 *
 * @param _mboxServer host of the mbox server e.g.mbox-test.dev.tt.omtrdc.net
 * @param _clientCode client code
 */
mboxUrlBuilder = function(_mboxServer, _clientCode) {
  this._mboxServer = _mboxServer;
  this._clientCode = _clientCode;
  this._parameters = [];
  this._urlProcess = function(_url) { return _url; };
  this._basePath = null;
};

/**
 * Adds a new parameter regardless of whether or not it's present already, use with caution
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addNewParameter = function (_name, _value) {
  this._parameters.push({name: _name, value: _value});
  return this;
};

/**
 * Adds a parameter if it's not already present
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addParameterIfAbsent = function (_name, _value) {
  if (_value) {
    for (var _i = 0; _i < this._parameters.length; _i++) {
      var _parameter = this._parameters[_i];
      if (_parameter.name === _name) {
        return this;
      }
    }

    this.checkInvalidCharacters(_name);
    return this.addNewParameter(_name, _value);
  }
};

/**
 * Adds a parameter
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addParameter = function(_name, _value) {
  this.checkInvalidCharacters(_name);

  for (var _i = 0; _i < this._parameters.length; _i++) {
    var _parameter = this._parameters[_i];
    if (_parameter.name === _name) {
      _parameter.value = _value;
      return this;
    }
  }

  return this.addNewParameter(_name, _value);
};

/**
 * @param _parameters An array with items of the form "name=value".
 */
mboxUrlBuilder.prototype.addParameters = function(_parameters) {
  if (!_parameters) {
    return this;
  }
  for (var _i = 0; _i < _parameters.length; _i++) {
    var _splitIndex = _parameters[_i].indexOf('=');
    if (_splitIndex === -1 || _splitIndex === 0) {
      continue;
    }
    this.addParameter(_parameters[_i].substring(0, _splitIndex),
      _parameters[_i].substring(_splitIndex + 1, _parameters[_i].length));
  }
  return this;
};

mboxUrlBuilder.prototype.setServerType = function(_type) {
  this._serverType = _type;
};

mboxUrlBuilder.prototype.setBasePath = function(_basePath) {
  this._basePath = _basePath;
};

/**
 * @param _action is a function that accepts a string parameter (url)
 * @return The new url string
 */
mboxUrlBuilder.prototype.setUrlProcessAction = function(_action) {
  this._urlProcess = _action;
};

mboxUrlBuilder.prototype.buildUrl = function() {
  var _path = this._basePath ? this._basePath : '/m2/' + this._clientCode + '/mbox/' + this._serverType;
  var _protocol = document.location.protocol == 'file:' ? 'http:' : document.location.protocol;
  var _url = _protocol + "//" + this._mboxServer + _path;
  var _separator = _url.indexOf('?') != -1 ? '&' : '?';

  for (var _i = 0; _i < this._parameters.length; _i++) {
    var _parameter = this._parameters[_i];
    _url += _separator + encodeURIComponent(_parameter.name) + '=' + encodeURIComponent(_parameter.value);
    _separator = '&';
  }

  return this._escapeQuote(this._urlProcess(_url));
};

/**
 * @return Array an array of objects with two properties "name" and "value"
 */
mboxUrlBuilder.prototype.getParameters = function() {
  return this._parameters;
};

mboxUrlBuilder.prototype.setParameters = function(_parameters) {
  this._parameters = _parameters;
};

mboxUrlBuilder.prototype.clone = function() {
  var _newUrlBuilder = new mboxUrlBuilder(this._mboxServer, this._clientCode);

  _newUrlBuilder.setServerType(this._serverType);
  _newUrlBuilder.setBasePath(this._basePath);
  _newUrlBuilder.setUrlProcessAction(this._urlProcess);

  for (var _i = 0; _i < this._parameters.length; _i++) {
    _newUrlBuilder.addParameter(this._parameters[_i].name, this._parameters[_i].value);
  }

  return _newUrlBuilder;
};

mboxUrlBuilder.prototype._escapeQuote = function(_text) {
  return _text.replace(/\"/g, '&quot;').replace(/>/g, '&gt;');
};

/**
  * Checks a parameter's name for prohibited chars
  */
 mboxUrlBuilder.prototype.checkInvalidCharacters = function (_name) {
   var _invalidCharacters = new RegExp('(\'|")');

   if (_invalidCharacters.exec(_name)) {
     throw "Parameter '" + _name + "' contains invalid characters";
   }
 };

/**
 * Fetches the content given the url builder by including the script using
 * document.write(..)
 * @PrivateClass
 */
mboxStandardFetcher = function() { };

mboxStandardFetcher.prototype.getType = function() {
  return 'standard';
};

mboxStandardFetcher.prototype.fetch = function(_urlBuilder) {
  _urlBuilder.setServerType(this.getType());

  document.write('<' + 'scr' + 'ipt src="' + _urlBuilder.buildUrl() + '"><' + '\/scr' + 'ipt>');
};

mboxStandardFetcher.prototype.cancel = function() { };

/**
 * Fetches the content given the url builder by creating the script dynamically
 * in the DOM.
 * @PrivateClass
 */
mboxAjaxFetcher = function() { };

mboxAjaxFetcher.prototype.getType = function() {
  return 'ajax';
};

mboxAjaxFetcher.prototype.fetch = function(_urlBuilder) {
  _urlBuilder.setServerType(this.getType());
  var _url = _urlBuilder.buildUrl();

  this._include = document.createElement('script');
  this._include.src = _url;

  document.getElementsByTagName('HEAD')[0].appendChild(this._include);
};

mboxAjaxFetcher.prototype.cancel = function() { };

/**
 * A map of elements.
 *
 * @PrivateClass
 */
mboxMap = function() {
  this._backingMap = {};
  this._keys = [];
};

mboxMap.prototype.put = function(_key, _value) {
  if (!this._backingMap[_key]) {
    this._keys[this._keys.length] = _key;
  }

  this._backingMap[_key] = _value;
};

mboxMap.prototype.get = function(_key) {
  return this._backingMap[_key];
};

mboxMap.prototype.remove = function(_key) {
  this._backingMap[_key] = undefined;
  var _updatedKeys = [];

  for (var i = 0; i < this._keys.length; i++) {
    if (this._keys[i] !== _key) {
      _updatedKeys.push(this._keys[i]);
    }
  }

  this._keys = _updatedKeys;
};

mboxMap.prototype.each = function(_action) {
  for (var _i = 0; _i < this._keys.length; _i++ ) {
    var _key = this._keys[_i];
    var _value = this._backingMap[_key];

    if (_value) {
      var _result = _action(_key, _value);

      if (_result === false) {
        break;
      }
    }
  }
};

mboxMap.prototype.isEmpty = function() {
  return this._keys.length === 0;
};

/**
 * Creates and updates mboxes.
 *
 * @param _server host of the mbox server e.g.mbox-test.dev.tt.omtrdc.net
 * @param _clientCode - client's code e.g. 'demo'
 * @param _factoryId - a unique string identifying this factory
 * @param _version - mboxVersion
 */
mboxFactory = function(_server, _clientCode, _factoryId, _version) {
  var _settings = TNT._internal._settings;
  var _cookies = TNT._internal._cookies;
  var _pageParams = TNT._internal._pageParams;
  var _constants = TNT._internal._constants;

  this._pageLoaded = false;
  this._factoryId = _factoryId;
  this._mboxes = new mboxList();

  mboxFactories.put(_factoryId, this);

  // mboxIsSupported is a client defined function to test if mbox is supported
  // on this platform (defaults to just returning true)
  this._supported = _settings.mboxIsSupportedFunction() &&
     typeof (window.attachEvent || document.addEventListener || window.addEventListener) != 'undefined';

  this._enabled = this._supported && mboxGetPageParameter(_pageParams._disable) === null;

  var _isDefaultFactory = _factoryId == _constants._defaultFactoryId;
  var _cookieName = _constants._cookieNamePrefix + (_isDefaultFactory ? '' : ('-' + _factoryId));
  this._cookieManager = new mboxCookieManager(_cookieName, _settings.cookieDomainFunction());

  if (_settings.crossDomainXOnly) {
    this._enabled = this._enabled && this._cookieManager.isEnabled();
  }

  this._enabled = this._enabled && (this._cookieManager.getCookie(_cookies._disable) === null);

  if (this.isAdmin()) {
    this.enable();
  }

  this._listenForDomReady();
  this._mboxPageId = mboxGenerateId();
  this._mboxScreenHeight = mboxScreenHeight();
  this._mboxScreenWidth = mboxScreenWidth();
  this._mboxBrowserWidth = mboxBrowserWidth();
  this._mboxBrowserHeight = mboxBrowserHeight();
  this._mboxColorDepth = mboxScreenColorDepth();
  this._mboxBrowserTimeOffset = mboxBrowserTimeOffset();
  this._mboxSessionId = new mboxSession(this._mboxPageId, _pageParams._sessionId, _cookies._sessionId,
   _settings.sessionExpirationTimeout, this._cookieManager);

  this._mboxPCId = new mboxPC(_cookies._tntId, _settings.tntIdLifetime, this._cookieManager);
  this._urlBuilder = new mboxUrlBuilder(_server, _clientCode);

  this._initGlobalParameters(this._urlBuilder, _isDefaultFactory, _version);

  this._pageStartTime = new Date().getTime();
  this._pageEndTime = this._pageStartTime;

  var _self = this;
  this.addOnLoad(function() { _self._pageEndTime = new Date().getTime(); });

  if (this._supported) {
    // Checks that all mboxes have been successfully imported
    // and shows default content for any that failed
    this.addOnLoad(function() {
      _self._pageLoaded = true;
      _self.getMboxes().each(function(_mbox) {
        _mbox._disableWaitForNestedMboxes();
        _mbox.setFetcher(new mboxAjaxFetcher());
        _mbox.finalize(); });
      TNT._internal.nestedMboxes = [];
    });

    if (this._enabled) {
      this.limitTraffic(_settings.trafficLevelPercentage, _settings.trafficDuration);

      this._makeDefaultContentInvisible();

      this._mboxSignaler = new mboxSignaler(this);
    }
    else {
      if (!_settings.isProduction) {
        if (this.isAdmin()) {
          if (!this.isEnabled()) {
            alert("mbox disabled, probably due to timeout\n" +
            "Reset your cookies to re-enable\n(this message will only appear in administrative mode)");
          } else {
            alert("It looks like your browser will not allow " +
            _settings.companyName +
            " to set its administrative cookie. To allow setting the" +
            " cookie please lower the privacy settings of your browser.\n" +
            "(this message will only appear in administrative mode)");
          }
        }
      }
    }
  }
};

/**
 * Forcibly sets new PC ID.
 * This method should be used when there is a better way to track
 * a site user than by PC ID.
 *
 * @param _forcedId New PC ID to set.
 */
mboxFactory.prototype.forcePCId = function(_forcedId) {
  if (!TNT._internal._settings.clientTntIdSupport) {
    return;
  }

  if (this._mboxPCId.forceId(_forcedId)) {
    this._mboxSessionId.forceId(mboxGenerateId());
  }
};

/**
 * Allows the client to use their sessionId as the mbox sessionId. This
 * is useful if the client is required to preserve their id through their
 * site.
 *
 * @param sessionId for New session id.
 */
mboxFactory.prototype.forceSessionId = function(_forcedId) {
  if (!TNT._internal._settings.clientSessionIdSupport) {
    return;
  }

  this._mboxSessionId.forceId(_forcedId);
};

/**
 * @return true if the factory is enabled. If factory is disabled, the mboxes
 * are still created but they show default content only.
 */
mboxFactory.prototype.isEnabled = function() {
  return this._enabled;
};

/**
 * @return cause of mbox disabling
 */
mboxFactory.prototype.getDisableReason = function() {
  return this._cookieManager.getCookie(TNT._internal._cookies._disable);
};

/**
 * @return true if the client's environment is supported (i.e. there's a way
 *   to access DOM elements via document.getElementById and event handling
 *   is supported)
 */
mboxFactory.prototype.isSupported = function() {
  return this._supported;
};

/**
 * Disables the factory for the specified duration.
 *
 * @param _duration - duration in seconds (optional)
 * @param _cause - cause of disable (optional)
 */
mboxFactory.prototype.disable = function(_duration, _cause) {
  if (typeof _duration == 'undefined') {
    _duration = 60 * 60;
  }

  if (typeof _cause == 'undefined') {
    _cause = 'unspecified';
  }

  if (!this.isAdmin()) {
    this._enabled = false;
    this._cookieManager.setCookie(TNT._internal._cookies._disable, _cause, _duration);
  }
};

mboxFactory.prototype.enable = function() {
  this._enabled = true;
  this._cookieManager.deleteCookie(TNT._internal._cookies._disable);
};

mboxFactory.prototype.isAdmin = function() {
  return document.location.href.indexOf(TNT._internal._pageParams._environment) != -1;
};

/**
 * Limits the traffic (by disabling the factory for certain users) to the given
 * level for the specified duration.
 */
mboxFactory.prototype.limitTraffic = function(_level, _duration) {
  if (TNT._internal._settings.trafficLevelPercentage != 100) {
    if (_level == 100) {
      return;
    }

    var _enable = true;

    if (parseInt(this._cookieManager.getCookie(TNT._internal._cookies._trafficLevel)) != _level) {
      _enable = (Math.random() * 100) <= _level;
    }

    this._cookieManager.setCookie(TNT._internal._cookies._trafficLevel, _level, _duration);

    if (!_enable) {
      this.disable(60 * 60, 'limited by traffic');
    }
  }
};

/**
 * Adds a function to be called with body onload.
 */
mboxFactory.prototype.addOnLoad = function(_function) {

  // This extra checking is so that if there is a race, where addOnLoad
  // is called as the onload functions are being called, we'll detect this
  // and correctly call the passed in function exactly once, after the dom
  // has loaded.

  if (this.isDomLoaded()) {
    _function();
  } else {
    var _calledFunction = false;
    var _wrapper = function() {
      if (_calledFunction) {
        return;
      }
      _calledFunction = true;
      _function();
    };

    this._onloadFunctions.push(_wrapper);

    if (this.isDomLoaded() && !_calledFunction) {
      _wrapper();
    }
  }
};

mboxFactory.prototype.getEllapsedTime = function() {
  return this._pageEndTime - this._pageStartTime;
};

mboxFactory.prototype.getEllapsedTimeUntil = function(_time) {
  return _time - this._pageStartTime;
};

/**
 * @return An mboxList object that contains the mboxes associated with this
 *   factory.
 */
mboxFactory.prototype.getMboxes = function() {
  return this._mboxes;
};

/**
 * @param _mboxId the id of the mbox, defaults to 0 if not specified.
 *
 * @return mbox with the specified _mboxName and _mboxId.
 */
mboxFactory.prototype.get = function(_mboxName, _mboxId) {
  return this._mboxes.get(_mboxName).getById(_mboxId || 0);
};

/**
 * Updates one or more mboxes with the name _mboxName
 *
 * @param _mboxName - name of the mbox
 * @param _parameters - array of 0 or more items of the form "name=value"
 *   (the values need to be escaped for inclusion in the url)
 */
mboxFactory.prototype.update = function(_mboxName, _parameters) {
  if (!this.isEnabled()) {
    return;
  }

  var _self = this;

  if (!this.isDomLoaded()) {
    this.addOnLoad(function() { _self.update(_mboxName, _parameters); });
    return;
  }

  if (this._mboxes.get(_mboxName).length() === 0) {
    throw "Mbox " + _mboxName + " is not defined";
  }

  this._mboxes.get(_mboxName).each(function(_mbox) {
    var _urlBuilder = _mbox.getUrlBuilder();

    _urlBuilder.addParameter(TNT._internal._params._page, mboxGenerateId());

    _self._addTntIdIfExists(_urlBuilder);
    _self._addTargetPageParamsIfRequired(_urlBuilder, _mboxName);

    _self.setVisitorIdParameters(_urlBuilder, _mboxName);

    _mbox.load(_parameters);
  });
};

/**
 * This method sets the value for the visitor Ids that come from the VisitorAPI.js
 */
mboxFactory.prototype.setVisitorIdParameters =  function(_url, _mboxName) {
  if (typeof Visitor == 'undefined' || !TNT._internal._settings.imsOrgId) {
    return;
  }

  var visitor = Visitor.getInstance(TNT._internal._settings.imsOrgId);

  if (visitor.isAllowed()) {
    // calling a getter on the visitor may either return a value, or invoke
    // the callback, depending on if the value is immediately available.
    var addVisitorValueToUrl = function(param, getter, mboxName) {
      if (visitor[getter]) {
        var callback = function(value) {
          if (value) {
            _url.addParameter(param, value);
          }
        };
        var value;
        if (typeof mboxName != 'undefined') {
          value = visitor[getter]("mbox:" + mboxName);
        } else {
          value = visitor[getter](callback);
        }
        callback(value);
      }
    };

    addVisitorValueToUrl(TNT._internal._params._marketingCloudVisitorId, "getMarketingCloudVisitorID");
    addVisitorValueToUrl(TNT._internal._params._audienceManagerLocationHint, "getAudienceManagerLocationHint");
    addVisitorValueToUrl(TNT._internal._params._audienceManagerBlob, "getAudienceManagerBlob");
    addVisitorValueToUrl(TNT._internal._params._analyticsVisitorId, "getAnalyticsVisitorID");
    addVisitorValueToUrl(TNT._internal._params._supplementalDataId, "getSupplementalDataID", _mboxName);
  }
};

/**
 * Creates an mbox called _mboxName.
 *
 * There is a small chance that an mbox with the same name is created after
 * we call update - we will ignore this chance.
 *
 * @param _mboxName - name of the mbox
 * @param _parameters - array of 0 or more items of the form "name=value"
 *   (the values need to be escaped for inclusion in the url)
 * @param _defaultNode - the DOM node that is the default content
 *                       the name of the DOM that is the default content
 *                       or is not specified, search bacwords for
 *                       mboxDefault class to use as default content
 */
mboxFactory.prototype.create = function(_mboxName, _parameters, _defaultNode) {
  if (!this.isEnabled()) {
    return null;
  }

  var _now = new Date();
  var _time = _now.getTime() - (_now.getTimezoneOffset() * TNT._internal._constants._millisInMinute);
  var _urlBuilder = this._urlBuilder.clone();

  _urlBuilder.addParameter(TNT._internal._params._count, this._mboxes.length() + 1);
  _urlBuilder.addParameter(TNT._internal._params._time, _time);
  _urlBuilder.addParameters(_parameters);

  this._addTntIdIfExists(_urlBuilder);
  this._addTargetPageParamsIfRequired(_urlBuilder, _mboxName);

  this.setVisitorIdParameters(_urlBuilder, _mboxName);

  var _mboxId, _locator, _mbox;

  if (_defaultNode) {
    _locator = new mboxLocatorNode(_defaultNode);
  } else {
    if (this._pageLoaded) {
      throw 'The page has already been loaded, can\'t write marker';
    }

    _locator = new mboxLocatorDefault(this._getMboxMarkerDivId(_mboxName));
  }

  try {
    _mboxId = this._mboxes.get(_mboxName).length();
    _mbox = new mbox(_mboxName, _mboxId, _urlBuilder, _locator, this._getMboxImportDivId(_mboxName), this);

    if (this._enabled) {
      _mbox.setFetcher(this._pageLoaded ? new mboxAjaxFetcher() : new mboxStandardFetcher());
    }

    var _self = this;

    _mbox.setOnError(function(_message, _type) {
      _mbox.setMessage(_message);
      _mbox.activate();

      if (!_mbox.isActivated()) {
        _self.disable(TNT._internal._settings.mboxFactoryDisabledTimeout, _message);
        window.location.reload(false);
      }
    });

    this._mboxes.add(_mbox);
  } catch (_e) {
    this.disable();
    throw 'Failed creating mbox "' + _mboxName + '", the error was: ' + _e;
  }

  return _mbox;
};

mboxFactory.prototype._addTntIdIfExists = function(_urlBuilder) {
  var _tntId = this._mboxPCId.getId();

  if (_tntId) {
    _urlBuilder.addParameter(TNT._internal._params._tntId, _tntId);
  }
};

mboxFactory.prototype._addTargetPageParamsIfRequired = function(_urlBuilder, _mboxName) {
  var _shouldAddParams = !TNT.isAutoCreateGlobalMbox() && TNT.getGlobalMboxName() === _mboxName;

  if (_shouldAddParams) {
    _urlBuilder.addParameters(TNT.getTargetPageParameters());
  }
};

mboxFactory.prototype.getCookieManager = function() {
  return this._cookieManager;
};

mboxFactory.prototype.getPageId = function() {
  return this._mboxPageId;
};

mboxFactory.prototype.getPCId = function() {
  return this._mboxPCId;
};

mboxFactory.prototype.getSessionId = function() {
  return this._mboxSessionId;
};

mboxFactory.prototype.getSignaler = function() {
  return this._mboxSignaler;
};

mboxFactory.prototype.getUrlBuilder = function() {
  return this._urlBuilder;
};

mboxFactory.prototype._getMboxDivSuffix = function(_mboxName) {
  return this._factoryId + '-' + _mboxName + '-' + this._mboxes.get(_mboxName).length();
};

mboxFactory.prototype._getMboxMarkerDivId = function(_mboxName) {
  return TNT._internal._constants._divMarkerPrefix + this._getMboxDivSuffix(_mboxName);
};

mboxFactory.prototype._getMboxImportDivId = function(_mboxName) {
   return TNT._internal._constants._divImportPrefix + this._getMboxDivSuffix(_mboxName);
};

mboxFactory.prototype._initGlobalParameters = function(_urlBuilder, _isDefaultFactory, _version) {
  _urlBuilder.addParameter(TNT._internal._params._host, document.location.hostname);
  _urlBuilder.addParameter(TNT._internal._params._page, this._mboxPageId);
  _urlBuilder.addParameter(TNT._internal._params._screenHeight, this._mboxScreenHeight);
  _urlBuilder.addParameter(TNT._internal._params._screenWidth, this._mboxScreenWidth);
  _urlBuilder.addParameter(TNT._internal._params._browserWidth, this._mboxBrowserWidth);
  _urlBuilder.addParameter(TNT._internal._params._browserHeight, this._mboxBrowserHeight);
  _urlBuilder.addParameter(TNT._internal._params._browserTimeOffset, this._mboxBrowserTimeOffset);
  _urlBuilder.addParameter(TNT._internal._params._screenColorDepth, this._mboxColorDepth);
  _urlBuilder.addParameter(TNT._internal._pageParams._sessionId, this._mboxSessionId.getId());

  if (!_isDefaultFactory) {
    _urlBuilder.addParameter(TNT._internal._params._mboxFactoryId, this._factoryId);
  }

  this._addTntIdIfExists(_urlBuilder);

  if (TNT._internal._settings.crossDomainEnabled) {
    _urlBuilder.addParameter(TNT._internal._params._crossDomain, TNT._internal._settings.crossDomain);
  }

  var _params = TNT.getClientMboxExtraParameters();

  if (_params) {
    _urlBuilder.addParameters(_params.split('&'));
  }

  _urlBuilder.setUrlProcessAction(function(_url) {
    if (TNT._internal._settings.passPageParameters) {
      _url += '&';
      _url += TNT._internal._params._url;
      _url += '=' + encodeURIComponent(document.location);

      var _referrer = encodeURIComponent(document.referrer);

      if (_url.length + _referrer.length < 2000) {
        _url += '&';
        _url += TNT._internal._params._referrer;
        _url += '=' + _referrer;
      }
    }

    _url += '&';
    _url += TNT._internal._params._mboxVersion;
    _url += '=' + _version;

    return _url;
  });
};

/**
 * Causes all mbox default content to not be displayed:
 */
mboxFactory.prototype._makeDefaultContentInvisible = function() {
  document.write('<style>.' + TNT._internal._constants._divDefaultClass + ' { visibility:hidden; }</style>');
};

mboxFactory.prototype.isDomLoaded = function() {
  return this._pageLoaded;
};

mboxFactory.prototype._listenForDomReady = function() {
  if (this._onloadFunctions) {
    return;
  }

  this._onloadFunctions = [];

  var _self = this;
  (function() {
    var _eventName = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
    var _loaded = false;
    var _ready = function() {
      if (_loaded) {
        return;
      }
      _loaded = true;
      for (var i = 0; i < _self._onloadFunctions.length; ++i) {
        _self._onloadFunctions[i]();
      }
    };

    if (document.addEventListener) {
      document.addEventListener(_eventName, function() {
        document.removeEventListener(_eventName, arguments.callee, false);
        _ready();
      }, false);

      window.addEventListener("load", function(){
        document.removeEventListener("load", arguments.callee, false);
        _ready();
      }, false);

    } else if (document.attachEvent) {
      if (self !== self.top) {
        document.attachEvent(_eventName, function() {
          if (document.readyState === 'complete') {
            document.detachEvent(_eventName, arguments.callee);
            _ready();
          }
        });
      } else {
        var _checkScrollable = function() {
          try {
           document.documentElement.doScroll('left');
            _ready();
          } catch (_domNotReady) {
            setTimeout(_checkScrollable, 13);
          }
        };
        _checkScrollable();
      }
    }

    if (document.readyState === "complete") {
      _ready();
    }

  })();
};

/**
 * Iterates all signal cookies (e.g. prefixed with mboxSignalPrefix), and
 * creates a signal mbox for each signal cookie.
 *
 * @param _createMboxMethod Takes two arguments, first is the name of the mbox,
 *   second is an array of parameters.
 * @PrivateClass
 */
mboxSignaler = function(_factory) {
  this._doc = document;
  this._factory = _factory;
};

/**
 * Called from the imported div tag to signal that an mbox was clicked on.
 */
mboxSignaler.prototype.signal = function(_signalType, _mboxName /*,...*/) {
  if (!this._factory.isEnabled()) {
    return;
  }

  var _divNode = this._createDivNode(this._factory._getMboxMarkerDivId(_mboxName));

  this._addNodeToDom(this._doc.body, _divNode);

  var _mbox = this._factory.create(_mboxName, mboxShiftArray(arguments), _divNode);
  var _urlBuilder = _mbox.getUrlBuilder();

  _urlBuilder.addParameter(TNT._internal._params._page, mboxGenerateId());

  _mbox.load();
};

mboxSignaler.prototype._createDivNode = function(_id) {
  var _result = this._doc.createElement('DIV');
  _result.id = _id;
  _result.style.visibility = 'hidden';
  _result.style.display = 'none';

  return _result;
};

mboxSignaler.prototype._addNodeToDom = function(_dom, _node) {
  _dom.appendChild(_node);
};

/**
 * Represents a list of mboxes.
 *
 * @PrivateClass
 */
mboxList = function() {
  this._mboxes = [];
};

mboxList.prototype.add = function(_mbox) {
  var _helper = TNT._internal._helper;

  if (_helper._isUndefined(_mbox) || _helper._isNull(_mbox)) {
    return;
  }

  this._mboxes[this._mboxes.length] = _mbox;
};

/**
 * @return a subset of this mbox list with items of the specified name.
 */
mboxList.prototype.get = function(_mboxName) {
  var _result = new mboxList();

  for (var _i = 0; _i < this._mboxes.length; _i++) {
    var _mbox = this._mboxes[_i];

    if (_mbox.getName() == _mboxName) {
      _result.add(_mbox);
    }
  }

  return _result;
};

mboxList.prototype.getById = function(_index) {
  return this._mboxes[_index];
};

mboxList.prototype.length = function() {
  return this._mboxes.length;
};

/**
 * @param _action a function that taken an mbox instance as parameter.
 */
mboxList.prototype.each = function(_action) {
  if (typeof _action !== 'function') {
    throw 'Action must be a function, was: ' + typeof(_action);
  }

  for (var _i = 0; _i < this._mboxes.length; _i++) {
    _action(this._mboxes[_i]);
  }
};

//
// Note this constructor also writes a node to the DOM, do not create
// after the page is loaded
//
mboxLocatorDefault = function(_divId) {
  this._divId = _divId;

  document.write('<div id="' + this._divId + '" style="visibility:hidden;display:none">&nbsp;<\/div>');
};

mboxLocatorDefault.prototype.locate = function() {
  var _ELEMENT_NODE = 1;
  var _node = document.getElementById(this._divId);

  while (_node) {
    if (_node.nodeType == _ELEMENT_NODE) {
      if (_node.className == 'mboxDefault') {
        return _node;
      }
    }
    _node = _node.previousSibling;
  }

  return null;
};

mboxLocatorDefault.prototype.force = function() {
  // There was no default div, add an empty one
  var _div = document.createElement('div');
  _div.className = 'mboxDefault';

  var _marker = document.getElementById(this._divId);

  if (_marker) {
    _marker.parentNode.insertBefore(_div, _marker);
  }

  return _div;
};

mboxLocatorNode = function(_node) {
  this._node = _node;
};

mboxLocatorNode.prototype.locate = function() {
  return typeof this._node == 'string' ?  document.getElementById(this._node) : this._node;
};

mboxLocatorNode.prototype.force = function() {
  return null;
};

/*
 * Creates an mbox called '_mboxName' and attempts to load it
 *
 * @return the created mbox or null if the platform is not supported
 */
mboxCreate = function(_mboxName /*, ... */) {
  var _mbox = mboxFactoryDefault.create( _mboxName, mboxShiftArray(arguments));

  if (_mbox) {
    _mbox.load();
  }

  return _mbox;
};

/*
 * Creates and associates an mbox with a specified '_DOMNode'
 * The created mbox needs to be load()ed
 *
 * @param _defaultNode of default content
 *        - if null or empty string looks back for mboxDefault
 *        - if a string looks for a DOM node with the passed id
 *        - otherwise it is assumed to be a DOM node
 *
 * @return the created mbox or null if the platform is not supported
 */
mboxDefine = function(_defaultNode, _mboxName /*, ...*/) {
  var _mbox = mboxFactoryDefault.create(_mboxName, mboxShiftArray(mboxShiftArray(arguments)), _defaultNode);

  return _mbox;
};

mboxUpdate = function(_mboxName /*, ... */) {
  mboxFactoryDefault.update(_mboxName, mboxShiftArray(arguments));
};

/**
 * Class that is the base of all mbox types.
 * @PrivateClass
 *
 * @param _name - name of mbox
 * @param _id - index of this mbox in the list of mboxes of the same name
 * @param _urlBuilder - used to build url of the request
 * @param _mboxLocator object must support
 *   DOMNode locate() which should return null until the DOMNode is found.
 *   DOMNode force() which as a last resort should attempt to create
 *                   a DOMNOde and return it or null
 * @param _importName id of the node containing offer content
 * @param _factory factory that tries to create this mbox
 */
mbox = function(_name, _id, _urlBuilder, _mboxLocator, _importName, _factory) {
  this._timeout = null;
  this._activated = 0;
  this._locator = _mboxLocator;
  this._importName = _importName;
  this._contentFetcher = null;

  this._offer = new mboxOfferContent();
  this._div = null;
  this._urlBuilder = _urlBuilder;

  // Information to support debugging
  this.message = '';
  this._times = {};
  this._activateCount = 0;

  this._id = _id;
  this._name = _name;

  this._validateName();

  _urlBuilder.addParameter(TNT._internal._params._mboxName, _name);
  _urlBuilder.addParameter(TNT._internal._params._mboxId, _id);

  this._onError = function() {};
  this._onLoad = function() {};

  this._defaultDiv = null;
  // enabled for IE10+ only during page load
  this._waitForNestedMboxes = document.documentMode >= 10 && !_factory.isDomLoaded();

  if (this._waitForNestedMboxes) {
    this._nestedMboxes = TNT._internal.nestedMboxes;
    this._nestedMboxes.push(this._name);
  }
};

mbox.prototype.getId = function() {
  return this._id;
};

mbox.prototype._validateName = function() {
  var maxLength = TNT._internal._constants._mboxNameMaxLength;

  if (this._name.length > maxLength) {
    throw "Mbox Name " + this._name + " exceeds max length of " + maxLength + " characters.";
  } else if (this._name.match(/^\s+|\s+$/g)) {
    throw "Mbox Name " + this._name + " has leading/trailing whitespace(s).";
  }
};

mbox.prototype.getName = function() {
  return this._name;
};

/**
 * @return Array an array of parameters
 */
mbox.prototype.getParameters = function() {
  var _parameters = this._urlBuilder.getParameters();
  var _result = [];

  for (var _i = 0; _i < _parameters.length; _i++) {
    // do not include internal parameters
    if (_parameters[_i].name.indexOf('mbox') !== 0) {
      _result[_result.length] = _parameters[_i].name + '=' + _parameters[_i].value;
    }
  }

  return _result;
};

/**
 * Sets the action to execute when the offer has loaded.
 * To be used with mboxUpdate.
 */
mbox.prototype.setOnLoad = function(_action) {
  this._onLoad = _action;
  return this;
};

mbox.prototype.setMessage = function(_message) {
  this.message = _message;
  return this;
};

/**
 * @param _onError is a function that takes two string arguments:
 *   message, fetch type
 */
mbox.prototype.setOnError = function(_onError) {
  this._onError = _onError;
  return this;
};

mbox.prototype.setFetcher = function(_fetcher) {
  if (this._contentFetcher) {
    this._contentFetcher.cancel();
  }
  this._contentFetcher = _fetcher;
  return this;
};

mbox.prototype.getFetcher = function() {
  return this._contentFetcher;
};

/**
 * Loads mbox content.
 * @param _parameters - Optional parameters to be added to the request.
 */
mbox.prototype.load = function(_parameters) {
  if (this._contentFetcher === null) {
    return this;
  }

  this.setEventTime("load.start");
  this.cancelTimeout();
  this._activated = 0;

  var _urlBuilder = (_parameters && _parameters.length > 0) ?
    this._urlBuilder.clone().addParameters(_parameters) : this._urlBuilder;
  this._contentFetcher.fetch(_urlBuilder);

  var _self = this;
  this._timer = setTimeout(function() {
    _self._onError('browser timeout', _self._contentFetcher.getType());
  }, TNT._internal._settings.mboxTimeout);

  this.setEventTime("load.end");

  return this;
};

/*
 * Used by the server to signal that all assets have been loaded by
 * the browser.
 */
mbox.prototype.loaded = function() {
  this.cancelTimeout();
  if (!this.activate()) {
    var _self = this;
    setTimeout(function() { _self.loaded();  }, 100);
  }
};

/**
 * Called when the mbox has been successfully loaded to activate
 * the mbox for display.
 *
 * This call may fail if the DOM has not been fully constructed
 */
mbox.prototype.activate = function() {
  if (this._activated) {
    return this._activated;
  }
  this.setEventTime('activate' + (++this._activateCount) + '.start');

  if (this._waitForNestedMboxes && this._nestedMboxes[this._nestedMboxes.length - 1] !== this._name) {
    return this._activated;
  }

  if (this.show()) {
    this.cancelTimeout();
    this._activated = 1;
  }
  this.setEventTime('activate' + this._activateCount + '.end');

  if (this._waitForNestedMboxes) {
    this._nestedMboxes.pop();
  }
  return this._activated;
};

/**
 * @return true if the mbox has been successfully activated
 */
mbox.prototype.isActivated = function() {
  return this._activated;
};

/**
 * Sets an offer into mbox.
 *
 * @param _offer Offer object that must have 'show(mbox)' method which
 * will be called to render this offer within the mbox passed in.
 *
 * The offer.show() method should return 1 on success and 0 on error.
 */
mbox.prototype.setOffer = function(_offer) {
  if (_offer && _offer.show && _offer.setOnLoad) {
    this._offer = _offer;
  } else {
    throw 'Invalid offer';
  }
  return this;
};

mbox.prototype.getOffer = function() {
  return this._offer;
};

/**
 * Shows the offer.
 *
 * @return 1 if it was possible to show the content, 0 otherwise.
 */
mbox.prototype.show = function() {
  this.setEventTime('show.start');
  var _result = this._offer.show(this);
  this.setEventTime(_result == 1 ? "show.end.ok" : "show.end");

  return _result;
};

/**
 * Shows the specified content in the mbox.
 *
 * @return 1 if it was possible to show the content, 0 otherwise.
 */
mbox.prototype.showContent = function(_content) {
  if (_content === null) {
    // content is not loaded into DOM yet
    return 0;
  }
  // div might be non-null but no longer in the DOM, so we check if the
  // parentNode exists
  if (this._div === null || !this._div.parentNode) {
    this._div = this.getDefaultDiv();

    if (this._div === null) {
      // default div is not in the DOM yet
      return 0;
    }
  }

  if (this._div !== _content) {
    this._hideDiv(this._div);
    this._div.parentNode.replaceChild(_content, this._div);
    this._div = _content;
  }

  this._showDiv(_content);

  this._onLoad();

  // Content was successfully displayed in place of the previous content node
  return 1;
};

/**
 * Hides any fetched content and show Default Content associated
 * with the mbox if it is avaliable yet.
 *
 * @return 1 if it was possible to show the default content
 */
mbox.prototype.hide = function() {
  this.setEventTime('hide.start');
  var _result = this.showContent(this.getDefaultDiv());
  this.setEventTime(_result == 1 ? 'hide.end.ok' : 'hide.end.fail');
  return _result;
};

/**
 * Puts the mbox into a shown state, if that fails shows default content
 * Also cancels any timeouts associated with the mbox
 */
mbox.prototype.finalize = function() {
  this.setEventTime('finalize.start');
  this.cancelTimeout();

  if (!this.getDefaultDiv()) {
    if (this._locator.force()) {
      this.setMessage('No default content, an empty one has been added');
    } else {
      this.setMessage('Unable to locate mbox');
    }
  }

  if (!this.activate()) {
    this.hide();
    this.setEventTime('finalize.end.hide');
  }
  this.setEventTime('finalize.end.ok');
};

mbox.prototype.cancelTimeout = function() {
  if (this._timer) {
    clearTimeout(this._timer);
  }
  if (this._contentFetcher) {
    this._contentFetcher.cancel();
  }
};

mbox.prototype.getDiv = function() {
  return this._div;
};

/**
 * returns valid default div
 * (even if it's not present in the DOM anymore)
 */
mbox.prototype.getDefaultDiv = function() {
  if (this._defaultDiv === null) {
    this._defaultDiv = this._locator.locate();
  }
  return this._defaultDiv;
};

mbox.prototype.setEventTime = function(_event) {
  this._times[_event] = (new Date()).getTime();
};

mbox.prototype.getEventTimes = function() {
  return this._times;
};

mbox.prototype.getImportName = function() {
  return this._importName;
};

mbox.prototype.getURL = function() {
  return this._urlBuilder.buildUrl();
};

mbox.prototype.getUrlBuilder = function() {
  return this._urlBuilder;
};

mbox.prototype._isVisible = function(_div) {
  return _div.style.display != 'none';
};

mbox.prototype._showDiv = function(_div) {
  this._toggleDiv(_div, true);
};

mbox.prototype._hideDiv = function(_div) {
  this._toggleDiv(_div, false);
};

mbox.prototype._toggleDiv = function(_div, _visible) {
  _div.style.visibility = _visible ? "visible" : "hidden";
  _div.style.display = _visible ? "block" : "none";
};

mbox.prototype._disableWaitForNestedMboxes = function() {
  this._waitForNestedMboxes = false;
};

mbox.prototype.relocateDefaultDiv = function() {
  this._defaultDiv = this._locator.locate();
};

mboxOfferContent = function() {
  this._onLoad = function() {};
};

mboxOfferContent.prototype.show = function(_mbox) {
  var _result = _mbox.showContent(document.getElementById(_mbox.getImportName()));
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

mboxOfferContent.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

/**
 * Ajax offer.
 */
mboxOfferAjax = function(_content) {
  this._content = _content;
  this._onLoad = function() {};
};

mboxOfferAjax.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

mboxOfferAjax.prototype.show = function(_mbox) {
  var _contentDiv = document.createElement('div');

  _contentDiv.id = _mbox.getImportName();
  _contentDiv.innerHTML = this._content;

  var _result = _mbox.showContent(_contentDiv);
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

/**
 * Offer that shows default content.
 */
mboxOfferDefault = function() {
  this._onLoad = function() {};
};

mboxOfferDefault.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

mboxOfferDefault.prototype.show = function(_mbox) {
  var _result = _mbox.hide();
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

mboxCookieManager = function mboxCookieManager(_name, _domain) {
  this._name = _name;
  // single word domains are not accepted in a cookie domain clause
  this._domain = _domain === '' || _domain.indexOf('.') === -1 ? '' : '; domain=' + _domain;
  this._cookiesMap = new mboxMap();
  this.loadCookies();
};

mboxCookieManager.prototype.isEnabled = function() {
  this.setCookie(TNT._internal._cookies._check, 'true', 60);
  this.loadCookies();
  return this.getCookie(TNT._internal._cookies._check) == 'true';
};

/**
 * Sets cookie inside of mbox cookies string.
 *
 * @param name Cookie name.
 * @param value Cookie value.
 * @param duration Cookie duration time in seconds.
 */
mboxCookieManager.prototype.setCookie = function(_name, _value, _duration) {
  if (typeof _name != 'undefined' && typeof _value != 'undefined' &&
    typeof _duration != 'undefined') {
    var _cookie = {};
    _cookie.name = _name;
    _cookie.value = encodeURIComponent(_value);
    // Store expiration time in seconds to save space.
    _cookie.expireOn = Math.ceil(_duration + new Date().getTime() / 1000);
    this._cookiesMap.put(_name, _cookie);
    this.saveCookies();
  }
};

mboxCookieManager.prototype.getCookie = function(_name) {
  var _cookie = this._cookiesMap.get(_name);
  return _cookie ? decodeURIComponent(_cookie.value) : null;
};

mboxCookieManager.prototype.deleteCookie = function(_name) {
  this._cookiesMap.remove(_name);
  this.saveCookies();
};

mboxCookieManager.prototype.getCookieNames = function(_namePrefix) {
  var _cookieNames = [];
  this._cookiesMap.each(function(_name, _cookie) {
    if (_name.indexOf(_namePrefix) === 0) {
      _cookieNames[_cookieNames.length] = _name;
    }
  });
  return _cookieNames;
};

mboxCookieManager.prototype.saveCookies = function() {
  var _xDomainOnly = TNT._internal._settings.crossDomainXOnly;
  var _disabledCookieName = TNT._internal._cookies._disable;
  var _cookieValues = [];
  var _maxExpireOn = 0;

  this._cookiesMap.each(function(_name, _cookie) {
    if(!_xDomainOnly || _name === _disabledCookieName) {
      _cookieValues[_cookieValues.length] = _name + '#' + _cookie.value + '#' + _cookie.expireOn;

      if (_maxExpireOn < _cookie.expireOn) {
        _maxExpireOn = _cookie.expireOn;
      }
    }
  });

  var _expiration = new Date(_maxExpireOn * 1000);
  var _parts = [];

  _parts.push(this._name, '=', _cookieValues.join('|'));

  if (TNT._internal._settings.usePersistentCookies) {
    _parts.push('; expires=', _expiration.toGMTString());
  }

  _parts.push('; path=/', this._domain);

  document.cookie = _parts.join("");
};

mboxCookieManager.prototype.loadCookies = function() {
  this._cookiesMap = new mboxMap();
  var _cookieStart = document.cookie.indexOf(this._name + '=');
  if (_cookieStart != -1) {
    var _cookieEnd = document.cookie.indexOf(';', _cookieStart);
    if (_cookieEnd == -1) {
      _cookieEnd =  document.cookie.indexOf(',', _cookieStart);
      if (_cookieEnd == -1) {
        _cookieEnd = document.cookie.length;
      }
    }
    var _internalCookies = document.cookie.substring(
      _cookieStart + this._name.length + 1, _cookieEnd).split('|');

    var _nowInSeconds = Math.ceil(new Date().getTime() / 1000);
    for (var _i = 0; _i < _internalCookies.length; _i++) {
      var _cookie = _internalCookies[_i].split('#');
      if (_nowInSeconds <= _cookie[2]) {
        var _newCookie = {};
        _newCookie.name = _cookie[0];
        _newCookie.value = _cookie[1];
        _newCookie.expireOn = _cookie[2];
        this._cookiesMap.put(_newCookie.name, _newCookie);
      }
    }
  }
};

/**
 * Class representing the users Session Id
 *
 * Retrieves the users sessionId from the url or cookie
 * Uses the specified _randomId if no id is found
 * @PrivateClass
 */
mboxSession = function(_randomId, _idArg, _cookieName, _expireTime, _cookieManager) {
  this._idArg = _idArg;
  this._cookieName = _cookieName;
  this._expireTime = _expireTime;
  this._cookieManager = _cookieManager;
  this._id = typeof mboxForceSessionId != 'undefined' ? mboxForceSessionId : mboxGetPageParameter(this._idArg);

  if (this._id === null || this._id.length === 0) {
    this._id = _cookieManager.getCookie(_cookieName);

    if (this._id === null || this._id.length === 0) {
      this._id = _randomId;
    }
  }

  this._cookieManager.setCookie(_cookieName, this._id, _expireTime);
};

/**
 * @return the users session id
 */
mboxSession.prototype.getId = function() {
  return this._id;
};

mboxSession.prototype.forceId = function(_forcedId) {
  this._id = _forcedId;

  this._cookieManager.setCookie(this._cookieName, this._id, this._expireTime);
};

/**
 * Class representing users PC Id.
 * @PrivateClass
 */
mboxPC = function(_cookieName, _expireTime, _cookieManager) {
  this._cookieName = _cookieName;
  this._expireTime = _expireTime;
  this._cookieManager = _cookieManager;
  this._id = typeof mboxForcePCId != 'undefined' ? mboxForcePCId : _cookieManager.getCookie(_cookieName);

  if (this._id) {
    _cookieManager.setCookie(_cookieName, this._id, _expireTime);
  }

};

/**
 * @return the PC id
 */
mboxPC.prototype.getId = function() {
  return this._id;
};

/**
 * @return Boolean if forced ID value was set, false otherwise.
 */
mboxPC.prototype.forceId = function(_forcedId) {
  if (this._id != _forcedId) {
    this._id = _forcedId;
    this._cookieManager.setCookie(this._cookieName, this._id, this._expireTime);

    return true;
  }

  return false;
};

mboxGetPageParameter = function(_name) {
  var _result = null;
  var _parameterRegExp = new RegExp("\\?[^#]*" + _name + "=([^\&;#]*)");
  var _parameterMatch = _parameterRegExp.exec(document.location);

  if (_parameterMatch && _parameterMatch.length >= 2) {
    _result = _parameterMatch[1];
  }

  return _result;
};

mboxSetCookie = function(_name, _value, _duration) {
  return mboxFactoryDefault.getCookieManager().setCookie(_name, _value, _duration);
};

mboxGetCookie = function(_name) {
  return mboxFactoryDefault.getCookieManager().getCookie(_name);
};

mboxCookiePageDomain = function() {
  var _domain = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
  var _ipRegExp = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;

  if (!_ipRegExp.exec(_domain)) {
    var _baseDomain = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(_domain);

    if (_baseDomain) {
      _domain = _baseDomain[0];

      if (_domain.indexOf("www.") === 0) {
        _domain=_domain.substr(4);
      }
    }
  }

  return _domain ? _domain: "";
};

mboxShiftArray = function(_iterable) {
  var _result = [];

  for (var _i = 1; _i < _iterable.length; _i++) {
    _result[_result.length] = _iterable[_i];
  }

  return _result;
};

mboxGenerateId = function() {
  return (new Date()).getTime() + "-" + Math.floor(Math.random() * 999999);
};

mboxScreenHeight = function() {
  return screen.height;
};

mboxScreenWidth = function() {
  return screen.width;
};

mboxBrowserWidth = function() {
  return (window.innerWidth) ? window.innerWidth :
    document.documentElement ? document.documentElement.clientWidth :
      document.body.clientWidth;
};

mboxBrowserHeight = function() {
  return (window.innerHeight) ? window.innerHeight :
    document.documentElement ? document.documentElement.clientHeight :
      document.body.clientHeight;
};

mboxBrowserTimeOffset = function() {
  return -new Date().getTimezoneOffset();
};

mboxScreenColorDepth = function() {
  return screen.pixelDepth;
};

TNT._internal._disableExperienceManagerAndReload = function(_win, _atObj, _cookieName, _duration, _cookieManager) {
  if (!_atObj.targetJSLoaded) {
    _cookieManager.setCookie(_cookieName, true, _duration);
    _win.location.reload();
  }
};

TNT._internal._initExperienceManager = function(_win, _doc, _settings, _cookies, _cookieManager) {
  var _AT_KEY = '_AT';
  var _RETRY = 50;
  var _cookieName = _cookies._experienceManagerDisabled;
  var _duration = _settings.experienceManagerDisabledTimeout;
  var _timeout = _settings.experienceManagerTimeout;
  var _url = _settings.experienceManagerPluginUrl;
  var _delayFunc = _win.setTimeout;
  var _emptyFunc = function(_actions){};
  var _dummyFunc = function(_actions){ _delayFunc(function() {_win[_AT_KEY].applyWhenReady(_actions);}, _RETRY); };

  if (_AT_KEY in _win) {
    return;
  }

  _win[_AT_KEY] = {};

  if (_cookieManager.getCookie(_cookieName) !== 'true') {
    _doc.write('<scr' + 'ipt src="' + _url + '"><\/sc' + 'ript>');

    _win[_AT_KEY].applyWhenReady = _dummyFunc;

    _delayFunc(function() {
      TNT._internal._disableExperienceManagerAndReload(_win, _win[_AT_KEY], _cookieName, _duration, _cookieManager);
    }, _timeout);
  } else {
    _win[_AT_KEY].applyWhenReady = _emptyFunc;
  }
};

mboxVizTargetUrl = function(_mboxName /*, ... */) {
  if (!mboxFactoryDefault.isEnabled()) {
    return;
  }

  var _params = TNT._internal._params;
  var _millisInMinute = TNT._internal._constants._millisInMinute;
  var _clientCode = TNT._internal._settings.clientCode;
  var _now = new Date();
  var _offset = _now.getTimezoneOffset() * _millisInMinute;
  var _urlBuilder = mboxFactoryDefault.getUrlBuilder().clone();

  _urlBuilder.setBasePath('/m2/' + _clientCode + '/viztarget');
  _urlBuilder.addParameter(_params._mboxName, _mboxName);
  _urlBuilder.addParameter(_params._mboxId, 0);
  _urlBuilder.addParameter(_params._count, mboxFactoryDefault.getMboxes().length() + 1);
  _urlBuilder.addParameter(_params._time, _now.getTime() - _offset);
  _urlBuilder.addParameter(_params._page, mboxGenerateId());
  _urlBuilder.addParameter(_params._domLoaded, mboxFactoryDefault.isDomLoaded());

  var _parameters = mboxShiftArray(arguments);

  if (_parameters && _parameters.length > 0) {
    _urlBuilder.addParameters(_parameters);
  }

  mboxFactoryDefault._addTntIdIfExists(_urlBuilder);
  mboxFactoryDefault._addTargetPageParamsIfRequired(_urlBuilder, _mboxName);
  mboxFactoryDefault.setVisitorIdParameters(_urlBuilder, _mboxName);

  return _urlBuilder.buildUrl();
};

TNT.createGlobalMbox = function () {
  if (!mboxFactoryDefault.isEnabled()) {
    return;
  }

  var _now = new Date();
  var _time = _now.getTime() - (_now.getTimezoneOffset() * TNT._internal._constants._millisInMinute);
  var _globalMboxName = TNT.getGlobalMboxName();
  var _clientCode = TNT._internal._settings.clientCode;
  var _urlBuilder = mboxFactoryDefault.getUrlBuilder().clone();
  var _fetcher = new mboxStandardFetcher();

  _urlBuilder.setBasePath('/m2/' + _clientCode + '/viztarget');
  _urlBuilder.addParameter(TNT._internal._params._count, 0);
  _urlBuilder.addParameter(TNT._internal._params._time, _time);
  _urlBuilder.addParameter(TNT._internal._params._mboxName, _globalMboxName);
  _urlBuilder.addParameter(TNT._internal._params._mboxId, 0);

  mboxFactoryDefault._addTntIdIfExists(_urlBuilder);
  mboxFactoryDefault._addTargetPageParamsIfRequired(_urlBuilder, _globalMboxName);
  mboxFactoryDefault.setVisitorIdParameters(_urlBuilder, _globalMboxName);

  _fetcher.fetch(_urlBuilder);
};

TNT._internal._isDebugEnabled = function(_cookieManager, _debugParam, _debugCookie) {
  return mboxGetPageParameter(_debugParam) || _cookieManager.getCookie(_debugCookie);
};

TNT._internal._showDebugInfo = function(_settings) {
  setTimeout(function() {
    if (typeof mboxDebugLoaded == 'undefined') {
      alert('Could not load the remote debug.\nPlease check your connection to ' + _settings.companyName + ' servers');
    }
  }, 60*60);

  var _url = _settings.adminUrl + '/mbox/mbox_debug.jsp?mboxServerHost=' + _settings.serverHost + '&clientCode=' +
   _settings.clientCode;

  document.write('<' + 'scr' + 'ipt src="' + _url + '"><' + '\/scr' + 'ipt>');
};

TNT._internal._targetGlobalSettingsExist = function(_settings) {
  var _helper = TNT._internal._helper;

  return !_helper._isUndefined(_settings) && !_helper._isNull(_settings) && _helper._isObject(_settings);
};

TNT._internal._copySettings = function(_settings, _internalSettings) {
  var _helper = TNT._internal._helper;
  var _keyExists;
  var _valueExists;
  var _value;

  for (var _key in _settings) {
    _keyExists = _settings.hasOwnProperty(_key) && _internalSettings.hasOwnProperty(_key);
    _value = _settings[_key];
    _valueExists = !_helper._isUndefined(_value) && !_helper._isNull(_value);

    if (_keyExists && _valueExists) {
      _internalSettings[_key] = _value;
    }
  }

  return _internalSettings;
};

TNT._internal._bootstrap = function() {
  var _settings = window.targetGlobalSettings;

  if (TNT._internal._targetGlobalSettingsExist(_settings)) {
    TNT._internal._settings = TNT._internal._copySettings(_settings, TNT._internal._settings);
  }

  var _version = TNT._internal._settings.mboxVersion;
  var _serverHost = TNT._internal._settings.serverHost;
  var _clientCode = TNT._internal._settings.clientCode;
  var _defaultFactoryId = TNT._internal._constants._defaultFactoryId;
  var _debugParam = TNT._internal._pageParams._debug;
  var _debugCookie = TNT._internal._cookies._debug;

  if (typeof mboxVersion == 'undefined') {
    // We should expose these variables to make sure other JS parts have access to them
    window.mboxFactories = new mboxMap();
    window.mboxFactoryDefault = new mboxFactory(_serverHost, _clientCode, _defaultFactoryId, _version);
    window.mboxVersion = _version;
  }

  if (TNT._internal._isDebugEnabled(mboxFactoryDefault.getCookieManager(), _debugParam, _debugCookie)){
    TNT._internal._showDebugInfo(TNT._internal._settings);
  }
};

TNT._internal._bootstrap();

(function(){
  var _settings = TNT._internal._settings;
  var _cookies = TNT._internal._cookies;
  var _cookieManager = mboxFactoryDefault.getCookieManager();

  TNT._internal._initExperienceManager(window, document, _settings, _cookies, _cookieManager);
}());

TNT._internal._settings.clientJavascriptFunction();

if (TNT.isAutoCreateGlobalMbox()) {
  TNT.createGlobalMbox();
}
