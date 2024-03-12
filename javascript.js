/*
Реалізуйте клас Button, який містить ширину, висоту, текст
кнопки, і метод showBtn(), який виводить кнопку на екран за до-
помогою тегу button і функції document.write().
Реалізуйте клас BootstrapButton, успадкувавши його від
класу Button. Додайте поле color і перевизначте метод showBtn()
так, щоб кнопка виводилася зі стилями і вказаним кольором.
*/
//--
// Клас Button
class Button 
{
    constructor(width, height, text) 
    {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showBtn() 
    {
        document.write(`<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`);
    }
}
class BootstrapButton extends Button 
{
    constructor(width, height, text, color) 
    {
        super(width, height, text);
        this.color = color;
    }
    showBtn() 
    {
        document.write(`<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color};">${this.text}</button>`);
    }
}
const button1 = new Button(100, 50, "Button 1");
button1.showBtn();
const button2 = new BootstrapButton(120, 60, "Button 2", "blue");
button2.showBtn();



/*
Реалізуйте клас, що описує геометричну фігуру з властивос-
тями та методами:
get-властивість для отримання назви фігури;
метод для виведення інформації про фігуру (сторони та їх
довжина);
метод для обчислення площі фігури;
метод для обчислення периметра фігури.
Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикут-
ник. Перевизначте методи виведення та обчислень у класах-спад-
коємцях.
Створіть масив з різними фігурами та виведіть інформацію
про кожну з них, включаючи площу та периметр.
*/
//--
// Клас, що описує геометричну фігуру
class Shape 
{
    constructor(name, sides) 
    {
        this.name = name;
        this.sides = sides;
    }
    getInfo() 
    {
        return `Figure: ${this.name}, Sides: ${this.sides}`;
    }
    get area() 
    {
        throw new Error('Method "area" must be implemented in the subclass');
    }
    get perimeter() 
    {
        throw new Error('Method "perimeter" must be implemented in the subclass');
    }
}
class Square extends Shape 
{
    constructor(side) 
    {
        super("Square", 4);
        this.side = side;
    }
    getInfo() 
    {
        return super.getInfo() + `, Side Length: ${this.side}`;
    }
    get area() 
    {
        return this.side * this.side;
    }
    get perimeter() 
    {
        return 4 * this.side;
    }
}
class Rectangle extends Shape 
{
    constructor(length, width) 
    {
        super("Rectangle", 4);
        this.length = length;
        this.width = width;
    }
    getInfo() 
    {
        return super.getInfo() + `, Length: ${this.length}, Width: ${this.width}`;
    }
    get area() 
    {
        return this.length * this.width;
    }
    get perimeter() 
    {
        return 2 * (this.length + this.width);
    }
}
class Triangle extends Shape 
{
    constructor(side1, side2, side3) 
    {
        super("Triangle", 3);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getInfo() 
    {
        return super.getInfo() + `, Side Lengths: ${this.side1}, ${this.side2}, ${this.side3}`;
    }
    get area() 
    {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    get perimeter() 
    {
        return this.side1 + this.side2 + this.side3;
    }
}
const shapes = [ new Square(5), new Rectangle(4, 6), new Triangle(3, 4, 5) ];
shapes.forEach(shape => 
{
    console.log(shape.getInfo());
    console.log(`Area: ${shape.area}`);
    console.log(`Perimeter: ${shape.perimeter}`);
    console.log("-------------------------");
});


/*
Реалізуйте клас ExtentedArray, успадкувавши його від стан-
дартного класу Array і додавши такі методи:
метод getString(separator) для отримання рядка з усіма
елементами масиву, переліченими через зазначений роз-
дільник: кома, тире, пробіл тощо;
метод getHtml(tagName) для отримання рядка з HTML-
кодом, де кожен елемент масиву буде поміщений у вказа-
ний тег (врахуйте, якщо вказується тег li, тоді всі елемен-
ти додатково необхідно буде помістити в ul).
Створіть об’єкт класу ExtentedArray, заповніть його даними
та виведіть на екран результати роботи методів getString() і
getHtml().
*/
//--
class ExtendedArray extends Array 
{
    constructor(...args) 
    {
        super(...args);
    }
    getString(separator) 
    {
        return this.join(separator);
    }
    getHtml(tagName) 
    {
        const elements = this.map(element => `<li>${element}</li>`).join('');
        return `<${tagName}><ul>${elements}</ul></${tagName}>`;
    }
}
const extendedArr = new ExtendedArray('apple', 'banana', 'orange', 'grape');
console.log("String representation:", extendedArr.getString(', '));
console.log("HTML representation:", extendedArr.getHtml('div'));