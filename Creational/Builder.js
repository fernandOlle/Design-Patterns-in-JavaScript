class Code {
  constructor(name) {
    this.name = name;
    this.fields = [];
  }

  toString() {
    let arr = [];
    arr.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      arr.push(`  constructor(`);
      for (let i = 0; i < this.fields.length; ++i) {
        arr.push(this.fields[i]);
        if (i + 1 !== this.fields.length) {
          arr.push(', ');
        }
      }
      arr.push(`) {\n`);
      for (let field of this.fields) {
        arr.push(`    this.${field} = ${field};\n`);
      }
      arr.push('  }\n');
    }
    arr.push(`}`);
    return arr.join('');
  }
}

class CodeBuilder {
  constructor(className) {
    this._code = new Code(className);
  }

  addField(name) {
    this._code.fields.push(name);
    return this;
  }

  toString() {
    return this._code.toString();
  }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());
