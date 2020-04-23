
module.exports = (Handlebars) => {
  Handlebars.registerHelper('datatype', function (_attr) {
    if(!_attr) {
      throw new Error('datatype = _attr is null');
    }
    _attr = _attr.toLowerCase();
    let val = ``;

    if (_attr === "boolean" || _attr === "bit(1)" || _attr === "bit") {
      val = 'BOOLEAN';
    }
    else if (_attr.match(/^(smallint|mediumint|tinyint|int)/)) {
      var length = _attr.match(/\(\d+\)/);
      val = 'INTEGER' + (length ? length : '');

      var unsigned = _attr.match(/unsigned/i);
      if (unsigned) val += '.UNSIGNED'

      var zero = _attr.match(/zerofill/i);
      if (zero) val += '.ZEROFILL'
    }
    else if (_attr.match(/^bigint/)) {
      val = 'BIGINT';
    }
    else if (_attr.match(/^varchar/)) {
      var length = _attr.match(/\(\d+\)/);
      val = 'STRING' + (length ? length : '');
    }
    else if (_attr.match(/^string|varying|nvarchar/)) {
      val = 'STRING';
    }
    else if (_attr.match(/^char/)) {
      var length = _attr.match(/\(\d+\)/);
      val = 'CHAR' + (length ? length : '');
    }
    else if (_attr.match(/^real/)) {
      val = 'REAL';
    }
    else if (_attr.match(/text|ntext$/)) {
      val = 'TEXT';
    }
    else if (_attr === "date") {
      val = 'DATEONLY';
    }
    else if (_attr.match(/^(date|timestamp)/)) {
      val = 'DATE';
    }
    else if (_attr.match(/^(time)/)) {
      val = 'TIME';
    }
    else if (_attr.match(/^(float|float4)/)) {
      val = 'FLOAT';
    }
    else if (_attr.match(/^decimal/)) {
      val = 'DECIMAL';
    }
    else if (_attr.match(/^(float8|double precision|numeric)/)) {
      val = 'DOUBLE';
    }
    else if (_attr.match(/^uuid|uniqueidentifier/)) {
      val = 'UUIDV4';
    }
    else if (_attr.match(/^jsonb/)) {
      val = 'JSONB';
    }
    else if (_attr.match(/^json/)) {
      val = 'JSON';
    }
    else if (_attr.match(/^geometry/)) {
      val = 'GEOMETRY';
    }

    return val;
  });


  Handlebars.registerHelper('memberDef', function (val) {
    var m = '';

    if (val === undefined) {
      m += 'any';
    } else if (val.indexOf('BOOLEAN') > -1) {
      m += 'boolean';
    } else if (val.indexOf('INTEGER') > -1) {
      m += 'number';
    } else if (val.indexOf('BIGINT') > -1) {
      m += 'number';
    } else if (val.indexOf('STRING') > -1) {
      m += 'string';
    } else if (val.indexOf('CHAR') > -1) {
      m += 'string';
    } else if (val.indexOf('REAL') > -1) {
      m += 'number';
    } else if (val.indexOf('TEXT') > -1) {
      m += 'string';
    } else if (val.indexOf('DATE') > -1) {
      m += 'Date';
    } else if (val.indexOf('FLOAT') > -1) {
      m += 'number';
    } else if (val.indexOf('DECIMAL') > -1) {
      m += 'number';
    } else if (val.indexOf('DOUBLE') > -1) {
      m += 'number';
    } else if (val.indexOf('UUIDV4') > -1) {
      m += 'string';
    } else {
      m += 'any';
    }

    return m;
  });

  function getGqlType(val) {
    var m = '';

    if (val === undefined) {
      m += '';
    } else if (val.indexOf('BOOLEAN') > -1) {
      m += '';
    } else if (val.indexOf('INTEGER') > -1) {
      m += 'Int';
    } else if (val.indexOf('BIGINT') > -1) {
      m += 'Int';
    } else if (val.indexOf('STRING') > -1) {
      m += '';
    } else if (val.indexOf('CHAR') > -1) {
      m += '';
    } else if (val.indexOf('REAL') > -1) {
      m += '';
    } else if (val.indexOf('TEXT') > -1) {
      m += '';
    } else if (val.indexOf('DATE') > -1) {
      m += 'Date';
    } else if (val.indexOf('FLOAT') > -1) {
      m += 'Float';
    } else if (val.indexOf('DECIMAL') > -1) {
      m += 'Float';
    } else if (val.indexOf('DOUBLE') > -1) {
      m += 'Float';
    } else if (val.indexOf('UUIDV4') > -1) {
      m += '';
    } else {
      m += '';
    }
    return m;
  }

  Handlebars.registerHelper('isGqlType', function (value) {
    return getGqlType(value) != '';
  });

  Handlebars.registerHelper('replace', function (val, find, replace) {
    return val.replace(find, replace);
  });

  Handlebars.registerHelper('gqlType', getGqlType);

  Handlebars.registerHelper('isFilter', function (tableName, field, b) {
    const conf = b.data.root.data[tableName];
    if (conf) {
      return conf.filterBy.findIndex((el) => el === field) !== -1;
    } else {
      return false;
    }
  });

  Handlebars.registerHelper('exists', function (field) {
    return field !== undefined && field !== null && field !== '';
  });
}
