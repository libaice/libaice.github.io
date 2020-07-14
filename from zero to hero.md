
[Upgrade](https://medium.com/membership?source=upgrade_membership---nav_full------------------------)![baice li](https://miro.medium.com/fit/c/64/64/0*R-_Uzc4nIhsPeP28.jpg)

[![freeCodeCamp.org](https://miro.medium.com/max/600/1*wViBNJ1o9rM5p6b-gf3vxg.png)](https://medium.com/free-code-camp?source=post_page-----120ea540b567----------------------)

- [ARCHIVE](https://medium.com/free-code-camp/archive?source=post_page-----120ea540b567----------------------)
- 

- [CHECK OUT OUR NEW SITE: FREECODECAMP NEWS](https://www.freecodecamp.org/news?source=post_page-----120ea540b567----------------------)





#### Top highlight

# Learning Python: From Zero to Hero

[![TK](https://miro.medium.com/fit/c/96/96/1*K8VP1jfexprs2O3yUYez8w.jpeg)](https://medium.com/@leandrotk_?source=post_page-----120ea540b567----------------------)

[TK](https://medium.com/@leandrotk_?source=post_page-----120ea540b567----------------------)Follow

[Oct 1, 2017](https://medium.com/free-code-camp/learning-python-from-zero-to-hero-120ea540b567?source=post_page-----120ea540b567----------------------) · 11 min read











![Image for post](https://miro.medium.com/max/60/1*ueWmI48uuShON-hX7LwI0w.png?q=20)

![Image for post](https://miro.medium.com/max/1521/1*ueWmI48uuShON-hX7LwI0w.png)

This post was originally published at [***TK's Blog\***](https://leandrotk.github.io/tk/2017/09/learning-python-from-zero-to-hero/index.html).

First of all, what is Python? According to its creator, Guido van Rossum, Python is a:

> “high-level programming language, and its core design philosophy is all about code readability and a syntax which allows programmers to express concepts in a few lines of code.”

For me, the first reason to learn Python was that it is, in fact, a beautiful programming language. It was really natural to code in it and express my thoughts.

Another reason was that we can use coding in Python in multiple ways: data science, web development, and machine learning all shine here. Quora, Pinterest and Spotify all use Python for their backend web development. So let’s learn a bit about it.

# The Basics

## 1. Variables

You can think about variables as words that store a value. Simple as that.

In Python, it is really easy to define a variable and set a value to it. Imagine you want to store number 1 in a variable called “one.” Let’s do it:

How simple was that? You just assigned the value 1 to the variable “one.”

And you can assign any other **value** to whatever other **variables** you want. As you see in the table above, the variable “**two**” stores the integer **2**, and “**some_number**” stores **10,000**.

Besides integers, we can also use booleans (True / False), strings, float, and so many other data types.

## 2. Control Flow: conditional statements

“**If**” uses an expression to evaluate whether a statement is True or False. If it is True, it executes what is inside the “if” statement. For example:

**2** is greater than **1**, so the “**print**” code is executed.

The “**else**” statement will be executed if the “**if**” expression is **false**.

**1** is not greater than **2**, so the code inside the “**else**” statement will be executed.

You can also use an “**elif**” statement:

## 3. Looping / Iterator

In Python, we can iterate in different forms. I’ll talk about two: **while** and **for**.

**While** Looping: while the statement is True, the code inside the block will be executed. So, this code will print the number from **1** to **10**.

The **while** loop needs a “**loop condition.**” If it stays True, it continues iterating. In this example, when `num` is `11` the **loop condition** equals `False`.

Another basic bit of code to better understand it:

The **loop condition** is `True` so it keeps iterating — until we set it to `False`.

**For Looping**: you apply the variable “**num**” to the block, and the “**for**” statement will iterate it for you. This code will print the same as **while** code: from **1** to **10**.

See? It is so simple. The range starts with `1` and goes until the `11`th element (`10` is the `10`th element).

# List: Collection | Array | Data Structure

Imagine you want to store the integer 1 in a variable. But maybe now you want to store 2. And 3, 4, 5 …

Do I have another way to store all the integers that I want, but not in **millions of variables**? You guessed it — there is indeed another way to store them.

`List` is a collection that can be used to store a list of values (like these integers that you want). So let’s use it:

It is really simple. We created an array and stored it on **my_integer**.

But maybe you are asking: “How can I get a value from this array?”

Great question. `List` has a concept called **index**. The first element gets the index 0 (zero). The second gets 1, and so on. You get the idea.

To make it clearer, we can represent the array and each element with its index. I can draw it:

![Image for post](https://miro.medium.com/max/60/1*ReMk6NgghLII20vPD6uNEA.jpeg?q=20)

![Image for post]()

Using the Python syntax, it’s also simple to understand:

Imagine that you don’t want to store integers. You just want to store strings, like a list of your relatives’ names. Mine would look something like this:

It works the same way as integers. Nice.

We just learned how `Lists` indices work. But I still need to show you how we can add an element to the `List` data structure (an item to a list).

The most common method to add a new value to a `List` is `append`. Let’s see how it works:

`append` is super simple. You just need to apply the element (eg. “**The Effective Engineer**”) as the `append` parameter.

Well, enough about `Lists`***.\*** Let’s talk about another data structure.

# Dictionary: Key-Value Data Structure

Now we know that `Lists` are indexed with integer numbers. But what if we don’t want to use integer numbers as indices? Some data structures that we can use are numeric, string, or other types of indices.

Let’s learn about the `Dictionary` data structure. `Dictionary` is a collection of key-value pairs. Here’s what it looks like:

The **key** is the index pointing to the **value**. How do we access the `Dictionary` **value**? You guessed it — using the **key**. Let’s try it:

I created a `Dictionary` about me. My name, nickname, and nationality. Those attributes are the `Dictionary` **keys**.

As we learned how to access the `List` using index, we also use indices (**keys** in the `Dictionary` context) to access the **value** stored in the `Dictionary`.

In the example, I printed a phrase about me using all the values stored in the `Dictionary`. Pretty simple, right?

Another cool thing about `Dictionary` is that we can use anything as the value. In the `Dictionary` I created, I want to add the **key** “age” and my real integer age in it:

Here we have a **key** (age) **value** (24) pair using string as the **key** and integer as the **value**.

As we did with `Lists`, let’s learn how to add elements to a `Dictionary`. The **key** pointing to a **value** is a big part of what `Dictionary` is. This is also true when we are talking about adding elements to it:

We just need to assign a **value** to a `Dictionary` **key**. Nothing complicated here, right?

# Iteration: Looping Through Data Structures

As we learned in the [**Python Basics**](https://medium.com/the-renaissance-developer/python-101-the-basics-441136fb7cc3), the `List` iteration is very simple. We `Python` developers commonly use `For` looping. Let’s do it:

So for each book in the bookshelf, we (**can do everything with it**) print it. Pretty simple and intuitive. That’s Python.

For a hash data structure, we can also use the `for` loop, but we apply the `key` :

This is an example how to use it. For each `key` in the `dictionary` , we `print` the `key` and its corresponding `value`.

Another way to do it is to use the `iteritems` method.

We did name the two parameters as `key` and `value`, but it is not necessary. We can name them anything. Let’s see it:

We can see we used attribute as a parameter for the `Dictionary` `key`, and it works properly. Great!

# Classes & Objects

## A little bit of theory:

**Objects** are a representation of real world objects like cars, dogs, or bikes. The objects share two main characteristics: **data** and **behavior**.

Cars have **data,** like number of wheels, number of doors, and seating capacity They also exhibit **behavior**: they can accelerate, stop, show how much fuel is left, and so many other things.

We identify **data** as **attributes** and **behavior** as **methods** in object-oriented programming. Again:

Data → Attributes and Behavior → Methods

And a **Class** is the blueprint from which individual objects are created. In the real world, we often find many objects with the same type. Like cars. All the same make and model (and all have an engine, wheels, doors, and so on). Each car was built from the same set of blueprints and has the same components.

## Python Object-Oriented Programming mode: ON

Python, as an Object-Oriented programming language, has these concepts: **class** and **object**.

A class is a blueprint, a model for its objects.

So again, a class it is just a model, or a way to define **attributes** and **behavior** (as we talked about in the theory section). As an example, a vehicle **class** has its own **attributes** that define what **objects** are vehicles. The number of wheels, type of tank, seating capacity, and maximum velocity are all attributes of a vehicle.

With this in mind, let’s look at Python syntax for **classes**:

We define classes with a **class statement —** and that’s it. Easy, isn’t it?

**Objects** are instances of a **class**. We create an instance by naming the class.

Here `car` is an **object** (or instance) of the **class** `Vehicle`.

Remember that our vehicle **class** has four **attributes**: number of wheels, type of tank, seating capacity, and maximum velocity. We set all these **attributes** when creating a vehicle **object**. So here, we define our **class** to receive data when it initiates it:

We use the `init` **method**. We call it a constructor method. So when we create the vehicle **object**, we can define these **attributes**. Imagine that we love the **Tesla Model S,** and we want to create this kind of **object**. It has four wheels, runs on electric energy, has space for five seats, and the maximum velocity is 250km/hour (155 mph). Let’s create this **object:**

Four wheels + electric “tank type” + five seats + 250km/hour maximum speed.

All attributes are set. But how can we access these attributes’ values? We **send a message to the object asking about them**. We call it a **method**. It’s the **object’s behavior**. Let’s implement it:

This is an implementation of two methods: **number_of_wheels** and **set_number_of_wheels**. We call it `getter` & `setter`. Because the first gets the attribute value, and the second sets a new value for the attribute.

In Python, we can do that using `@property` (`decorators`) to define `getters` and `setters`. Let’s see it with code:

And we can use these methods as attributes:

This is slightly different than defining methods. The methods work as attributes. For example, when we set the new number of wheels, we don’t apply two as a parameter, but set the value 2 to `number_of_wheels`. This is one way to write `pythonic` `getter` and `setter` code.

But we can also use methods for other things, like the “**make_noise**” method. Let’s see it:

When we call this method, it just returns a string ***“\*VRRRRUUUUM.\*”\***

------

# Encapsulation: Hiding Information

Encapsulation is a mechanism that restricts direct access to objects’ data and methods. But at the same time, it facilitates operation on that data (objects’ methods).

> “Encapsulation can be used to hide data members and members function. Under this definition, encapsulation means that the internal representation of an [object](https://en.wikipedia.org/wiki/Object_(computer_science)) is generally hidden from view outside of the object’s definition.” — Wikipedia

All internal representation of an object is hidden from the outside. Only the object can interact with its internal data.

First, we need to understand how `public` and `non-public` instance variables and methods work.

## Public Instance Variables

For a Python class, we can initialize a `public instance variable` within our constructor method. Let’s see this:

Within the constructor method:

Here we apply the `first_name` value as an argument to the `public instance variable`.

Within the class:

Here, we do not need to apply the `first_name` as an argument, and all instance objects will have a `class attribute` initialized with `TK`.

Cool. We have now learned that we can use `public instance variables` and `class attributes`. Another interesting thing about the `public` part is that we can manage the variable value. What do I mean by that? Our `object` can manage its variable value: `Get` and `Set` variable values.

Keeping the `Person` class in mind, we want to set another value to its `first_name` variable:

There we go. We just set another value (`kaio`) to the `first_name` instance variable and it updated the value. Simple as that. Since it’s a `public` variable, we can do that.

## Non-public Instance Variable

> We don’t use the term “private” here, since no attribute is really private in Python (without a generally unnecessary amount of work). — [PEP 8](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

As the `public instance variable` , we can define the `non-public instance variable` both within the constructor method or within the class. The syntax difference is: for `non-public instance variables` , use an underscore (`_`) before the `variable` name.

> “‘Private’ instance variables that cannot be accessed except from inside an object don’t exist in Python. However, there is a convention that is followed by most Python code: a name prefixed with an underscore (e.g. `_spam`) should be treated as a non-public part of the API (whether it is a function, a method or a data member)” — [Python Software Foundation](https://docs.python.org/2/tutorial/classes.html#private-variables-and-class-local-references)

Here’s an example:

Did you see the `email` variable? This is how we define a `non-public variable` :

> We can access and update it. `Non-public variables` are just a convention and should be treated as a non-public part of the API.

So we use a method that allows us to do it inside our class definition. Let’s implement two methods (`email` and `update_email`) to understand it:

Now we can update and access `non-public variables` using those methods. Let’s see:

1. We initiated a new object with `first_name` TK and `email` tk@mail.com
2. Printed the email by accessing the `non-public variable` with a method
3. Tried to set a new `email` out of our class
4. We need to treat `non-public variable` as `non-public` part of the API
5. Updated the `non-public variable` with our instance method
6. Success! We can update it inside our class with the helper method

## Public Method

With `public methods`, we can also use them out of our class:

Let’s test it:

Great — we can use it without any problem.

## Non-public Method

But with `non-public methods` we aren’t able to do it. Let’s implement the same `Person` class, but now with a `show_age` `non-public method` using an underscore (`_`).

And now, we’ll try to call this `non-public method` with our object:

> We can access and update it. `Non-public methods` are just a convention and should be treated as a non-public part of the API.

Here’s an example for how we can use it:

Here we have a `_get_age` `non-public method` and a `show_age` `public method`. The `show_age` can be used by our object (out of our class) and the `_get_age` only used inside our class definition (inside `show_age` method). But again: as a matter of convention.

## Encapsulation Summary

With encapsulation we can ensure that the internal representation of the object is hidden from the outside.

# Inheritance: behaviors and characteristics

Certain objects have some things in common: their behavior and characteristics.

For example, I inherited some characteristics and behaviors from my father. I inherited his eyes and hair as characteristics, and his impatience and introversion as behaviors.

In object-oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.

Let’s see another example and implement it in Python.

Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car. We can say that an **ElectricCar** class inherits these same attributes from the regular **Car** class.

Our **Car** class implemented:

Once initiated, we can use all `instance variables` created. Nice.

In Python, we apply a `parent class` to the `child class` as a parameter. An **ElectricCar** class can inherit from our **Car** class.

Simple as that. We don’t need to implement any other method, because this class already has it (inherited from **Car** class). Let’s prove it:

Beautiful.

# That’s it!

We learned a lot of things about Python basics:

- How Python variables work
- How Python conditional statements work
- How Python looping (while & for) works
- How to use Lists: Collection | Array
- Dictionary Key-Value Collection
- How we can iterate through these data structures
- Objects and Classes
- Attributes as objects’ data
- Methods as objects’ behavior
- Using Python getters and setters & property decorator
- Encapsulation: hiding information
- Inheritance: behaviors and characteristics

# Resources

- [Big-O Notation For Coding Interviews and Beyond](https://www.educative.io/courses/big-o-notation-for-interviews-and-beyond?aff=x8bV)
- [Learn Python from Scratch](https://www.educative.io/courses/learn-python-from-scratch?aff=x8bV)
- [Learn Object-Oriented Programming in Python](https://www.educative.io/courses/learn-object-oriented-programming-in-python?aff=x8bV)
- [Data Structures in Python: An Interview Refresher](https://www.educative.io/courses/data-structures-in-python-an-interview-refresher?aff=x8bV)
- [Data Structures and Algorithms in Python](https://www.educative.io/courses/ds-and-algorithms-in-python?aff=x8bV)
- [Data Structures for Coding Interviews in Python](https://www.educative.io/courses/data-structures-coding-interviews-python?aff=x8bV)
- [One Month Python Course](https://mbsy.co/lG6tv)

Congrats! You completed this dense piece of content about Python.

If you want a complete Python course, learn more real-world coding skills and build projects, try [***One Month Python Bootcamp\***](https://onemonth.com/courses/python?campaignid=33447&discount_code=TKPython1&mbsy=lG6tv&mbsy_source=7d89eeb0-0031-478c-a60c-6a96d762712a). See you there ☺

------

For more stories and posts about my journey learning & mastering programming, follow my publication [**The Renaissance Developer**](https://medium.com/the-renaissance-developer).

Have fun, keep learning, and always keep coding.

> [I hope you liked this content. Support my work on Ko-Fi](https://ko-fi.com/teekay)

My [Twitter](https://twitter.com/LeandroTk_) & [Github](https://github.com/LeandroTk). ☺

[freeCodeCamp.org](https://medium.com/free-code-camp?source=post_sidebar--------------------------post_sidebar-)

#### This is no longer updated.

Follow



#### 65K



- [Python](https://medium.com/tag/python)
- [Programming](https://medium.com/tag/programming)
- [Coding](https://medium.com/tag/coding)
- [Web Development](https://medium.com/tag/web-development)
- [Software Development](https://medium.com/tag/software-development)



#### 65K clapsApplause from you and 13,130 others











[![TK](https://miro.medium.com/fit/c/160/160/1*K8VP1jfexprs2O3yUYez8w.jpeg)](https://medium.com/@leandrotk_?source=follow_footer--------------------------follow_footer-)WRITTEN BY[TK](https://medium.com/@leandrotk_?source=follow_footer--------------------------follow_footer-)Follow

#### website http://bit.ly/tk-site — sharing knowledge https://www.patreon.com/iamteekay

[![freeCodeCamp.org](https://miro.medium.com/fit/c/160/160/1*MotlWcSa2n6FrOx3ul89kw.png)](https://medium.com/free-code-camp?source=follow_footer--------------------------follow_footer-)[freeCodeCamp.org](https://medium.com/free-code-camp?source=follow_footer--------------------------follow_footer-)Follow

#### This is no longer updated. Go to https://freecodecamp.org/news instead

[See responses (149)](https://medium.com/p/120ea540b567/responses/show?source=follow_footer--------------------------follow_footer-)

[Discover Medium](https://medium.com/about?autoplay=1&source=post_page-----120ea540b567----------------------)

Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. [Watch](https://medium.com/about?autoplay=1&source=post_page-----120ea540b567----------------------)

[Make Medium yours](https://medium.com/topics?source=post_page-----120ea540b567----------------------)

Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. [Explore](https://medium.com/topics?source=post_page-----120ea540b567----------------------)

[Become a member](https://medium.com/membership?source=post_page-----120ea540b567----------------------)

Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. [Upgrade](https://medium.com/membership?source=post_page-----120ea540b567----------------------)

[About](https://medium.com/about?autoplay=1&source=post_page-----120ea540b567----------------------)[Help](https://help.medium.com/hc/en-us?source=post_page-----120ea540b567----------------------)[Legal](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----120ea540b567----------------------)

![img](chrome-extension://lfebffopjdknlejjpmigkocfcechjjgm/static/floating_button_256.png)

Medium-Unlimited