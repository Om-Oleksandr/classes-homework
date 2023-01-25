// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

class Commodity {
  constructor(name, price, amount, currency = "UAH") {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.currency = currency;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (value.length < 3 || value.length > 10) {
      throw new RangeError("Name length must be 3-10 characters long");
    }
    this._name = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("Price must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Price must be greater 0");
    }
    this._price = value;
  }
  get amount() {
    return this._amount;
  }
  set amount(value) {
    if (typeof value !== "number") {
      throw new TypeError("Amount must be a number");
    }
    if (value < 0) {
      throw new RangeError("Amount must not be less than 0");
    }
    this._amount = value;
  }
  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (typeof value !== "string") {
      throw new TypeError("Currency must be a string");
    }
    if (value.length !== 3) {
      throw new RangeError("Currency length must be 3 characters long");
    }
    this._currency = value;
  }
  showInfo() {
    return `Name: ${this.name}\nPrice: ${this.price} ${this.currency}\nAmount: ${this.amount}\n`;
  }
  buyCommodity(value) {
    if (value < 0) {
      throw new RangeError("Amount shouldn't be negative");
    } else if (this.amount - value < 0) {
      throw new RangeError("Amount isn't enough");
    } else {
      this.amount -= value;
    }
    return value * this.price;
  }
}

class PhysicalCommodity extends Commodity {
  constructor(name, price, amount, currency, weight) {
    super(name, price, amount, currency);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(value) {
    if (value <= 0) {
      throw new RangeError("Weight shouldn't be 0 or less than 0");
    }
    this._weight = value;
  }
  showInfo() {
    return `${super.showInfo()}Weight: ${this.weight} gramm`;
  }
}

class VirtualCommodity extends Commodity {
  constructor(name, price, amount, currency, memoryCapacity = 50) {
    super(name, price, amount, currency);
    this.memoryCapacity = memoryCapacity;
  }
  get memoryCapacity() {
    return this._memoryCapacity;
  }
  set memoryCapacity(value) {
    if (value <= 0) {
      throw new RangeError("Memory capacity shouldn't be 0 or less than 0");
    }
    this._memoryCapacity = value;
  }
  showInfo() {
    return `${super.showInfo()}Memory capacity: ${this.memoryCapacity} GB`;
  }
}

try {
  const milk = new Commodity("milk", 34, 50);
  const meat = new PhysicalCommodity("meat", 130, 16, undefined, 600);
  const iCloud = new VirtualCommodity("iCloud", 40, 5000);
  console.log(milk.buyCommodity(50));
  console.log(milk.showInfo());
  console.log(meat.buyCommodity(8));
  console.log(meat.showInfo());
  console.log(iCloud.buyCommodity(3));
  console.log(iCloud.showInfo());
} catch (error) {
  console.log(error);
}

// const user1 = new User("Naruto", "Uzumaki", 18);
// const user2 = new UserClass("Son", "Goku", 43);
// const user3 = new UserClass("Monkey", "D. Luffy", 17);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   set name(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("Invalid value");
//     }
//     if (value.length === 0) {
//       throw new RangeError("Invalid value");
//     }
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
//   set age(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Invalid value");
//     }
//     if (value < 18 || value > 100) {
//       throw new RangeError("Invalid value");
//     }
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   buy() {
//     return this.name + " is buying";
//   }
//   static isUser(object) {
//     return object instanceof User;
//   }
// }

// class RegisteredUser extends User {
//   constructor(name, age, email) {
//     super(name, age);
//     this.email = email;
//     this._isRegistered = true;
//   }
//   set email(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("Invalid value");
//     }
//     if (value.length === 0) {
//       throw new RangeError("Invalid value");
//     }
//     this._email = value;
//   }
//   get email() {
//     return this._email;
//   }
//   logWishList(...args) {
//     args.forEach((arg) => console.log(arg));
//   }
// }

// class Admin extends RegisteredUser {
//   constructor(name, age, email) {
//     super(name, age, email);
//   }
//   addRegister(obj) {
//     if (obj instanceof RegisteredUser) {
//       obj._isRegistered = true;
//     }
//     throw new TypeError("Must be registered user");
//   }
//   removeRegister(obj) {
//     if (obj instanceof RegisteredUser) {
//       obj._isRegistered = false;
//     }
//   }
// }

// try {
//   const cat = new RegisteredUser("Neko", 20, "test@gmail.com");
//   const user = new User("Oleg", 36);
//   const admin = new Admin("Admin", 30, "admin@gmail.com");
//   console.log(cat);
//   console.log(user);
//   console.log(admin);
//   admin.removeRegister(user);
// } catch (error) {
//   console.log(error);
// }

// class Link {
//   constructor(text, href) {
//     this.text = text;
//     this.href = href;
//   }
//   returnLink() {
//     return `<a href = "${this.href}">${this.text}</a>`;
//   }
// }

// class LinkPicture extends Link {
//   constructor(href, pic) {
//     super("", href);
//     this.pic = pic;
//   }
//   returnLink() {
//     return `<a href = "${this.href}"><img src = "${this.pic}"></a>`;
//   }
// }

// class LinkNewTab extends Link {
//   constructor(text, href) {
//     super(text, href);
//     this.target = "_blank";
//   }
// }

// const picLink = new LinkPicture("https://youtube.com", "logo.png");
// const link = new Link("YouTube", "https://youtube.com");
// console.log(link.returnLink());
// console.log(picLink.returnLink());

// Створити клас Squirell
// -name (рядок від 4 до 7 символів)
// -color (рядок один з масиву COLORS )
// jump() ->  {name} is jumping (повертає рядок!!!)

// const COLORS = ["red", "gray", "colorfull"];
// const word = ["hello", "hi", "privit", "czech", "bonjur", "konnichiwa", "ni hao"];
// class Squirell {
//   constructor(name, colors) {
//     this.name = name;
//     this.color = colors[Math.floor(Math.random() * colors.length)];
//   }
//   set name(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("Name must be string");
//     }
//     if (value.length <= 4 && value.length >= 7) {
//       throw new RangeError(
//         "Minimum characters for name is 4 characters, Maximum is 7"
//       );
//     }
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
//   set colors(values) {
//     if (typeof valuse !== "string") {
//       throw new TypeError("Invalid value");
//     }
//     this._color = values;
//   }
//   get colors() {
//     return this._color;
//   }
//   jump() {
//     return `${this.name} is flying`;
//   }
// }

// class FlySquirell extends Squirell {
//   constructor(name, color, maxDistFly = 90) {
//     super(name, color);
//     this.maxDistFly = maxDistFly;
//   }
//   set maxDistFly(value) {
//     if (value > this.maxDistFly || value < 0) {
//       throw new RangeError("maxDistFly must be greater than");
//     }
//     this._maxDistFly = value;
//   }
//   get maxDistFly() {
//     return this._maxDistFly;
//   }
//   fly(value) {
//     if (value > this.maxDistFly || value < 0) {
//       throw new RangeError("maxDistFly must be greater than");
//     }
//     return `${this.name} is fly at ${value}`;
//   }
// }

// class MagicSquirell extends FlySquirell {
//   constructor(name, color, words) {
//     super(name, color, 160);
//     this.words = words;
//   }

//   set words(value) {
//     if (Array.isArray(value) === false) {
//       throw new TypeError('word must be string')
//     }
//     this._words = value;
//   }
//   get words() {
//     return this._words;
//   }
//   speak() {
//     this._words.forEach((word) => console.log(word));
//   }
// }

// const squirell = new Squirell("lucy", COLORS);
// const flySquirell = new FlySquirell("david", COLORS, 60);
// const magic = new MagicSquirell("oleg", COLORS, word);
// console.log(squirell);
// console.log(flySquirell.fly(3));
// console.log(magic.fly(151));
// magic.speak();
