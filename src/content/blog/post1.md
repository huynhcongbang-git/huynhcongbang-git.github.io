---
title: "Tìm hiểu về nguyên lý SOLID"
description: "Các nguyên lý cho việc thiết kế ứng dụng tốt hơn."
pubDate: "Jul 30 2026"
heroImage: "/post_solid_img.webp"
tags: ["khái niệm"]
---

[nguồn: https://www.freecodecamp.org/news/solid-principles-for-better-software-design/, lần cuối truy cập: **30/7/2026**]

Các nguyên tắc SOLID là một tập hợp các nguyên tắc để viết ra các ứng dụng chất lượng cao, có khả năng duy trì và mở rộng.

Các nguyên tắc này được giới thiệu bởi **Robert C. Martin** ở trong quyển sách 2000 trang: **"Design Principles and Design Patterns"** để giúp các lập trình viên viết các ứng dụng mà dễ hiểu, chỉnh sửa và mở rộng.

Những khái niệm này sau đó được **Michael Feathers** phát triển thêm, người mà giới thiệu cho chúng ta từ viết tắt SOLID.

Từ viết tắt **SOLID** đại diện cho:
- **S**ingle Responsibility Principle (SRP)
- **O**pen-Closed Principle (OCP)
- **L**iskov Substitution Principle (LSP)
- **I**nterface Segregation Principle (ISP)
- **D**ependency Inversion Principle (DIP)

Những nguyên tắc này cung cấp một cách thức cho các lập trình viên tổ chức code và tạo ra các ứng dụng linh hoạt, dễ dàng thay đổi và kiểm thử. Áp dụng các nguyên tắc SOLID có thể giúp code có khả năng mô-đun hóa, duy trì, mở rộng, và giúp cho các lập trình viên có thể cộng tác tốt hơn với nhau.

## **Thế nào là Single Responsibility Principle?**

Nguyên tắc này tuyên bố rằng **một class nên chỉ có một lý do để thay đổi**, hoặc nói cách khác là **nó nên chỉ có duy nhất một trách nhiệm**. Nó nghĩa là một class nên chỉ có duy nhất một công việc để làm, mà phải làm nó thật tốt.

Nếu một class có quá nhiều trách nhiệm, nó có thể trở nên khó có thể hiểu, duy trì và chỉnh sửa. Những thay đổi ở trong trách nhiệm này có thể vô tình tác động đến trách nhiệm khác, dẫn đến những hậu quả không mong muốn và lỗi phần mềm. Bằng cách thực hiện SRP, chúng ta có thể tạo ra các đoạn code có khả năng mô=đun hóa, đơn giản để hiểu, và ít có khả năng xuất hiện lỗi hơn.

Hãy xem một ví dụ mà vi phạm nguyên tắc SRP:

```java
class Marker {
    String name;
    String color;
    int price;
    
    public Marker(String name, String color, int price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
}
```
Đoạn code ở trên định nghĩa một class `Market` có 3 biến là - `name`, `color` và `price`.
```java
 class invoice {
    private Marker marker;
    private int quantity;
    
    public Invoice(Marker marker, int quantity) {
        this.marker = marker;
        this.quantity = quantity;
    }
    
    public int calculateTotal() {
        return marker.price * this.quantity;
    }
    
    public void printInvoice() {
        // printing implementation
    }
    
    public void savetoDb() {
        // save to database implementation
    }
 }
```
Class `Invoice` vi phạm nguyên tắc SRP vì nó có nhiều trách nhiệm - nó chịu trách nhiệm tính tổng giá trị, in hóa đơn, và lưu hóa đơn vào database. Như một kết quả, nếu logic tính toán thay đổi, chẳng hạn như thêm thuế, thì phương thức `calculateTotal()` sẽ cần phải chỉnh sửa. Tương tự, nếu việc triển khai chức năng in hoặc lưu vào database có bất kỳ thay đổi thì class cũng cần phải thay đổi.

Có nhiều lý do cho việc chỉnh sửa một class, mà có thể dẫn đến việc tăng chi phí duy trì và độ phức tạp.

Sau đây là cách chúng ta có thể chỉnh sửa đoạn code trên tuân theo nguyên tắc SRP:

```java
class Invoice {
    private Marker marker;
    private int quantity;
    
    public Invoice(Marker marker, int quantity) {
        this.marker = marker;
        this.quantity = quantity;
    }
    
    public int calculateTotal() {
        return marker.price * this.quantity;
    }
}
```
```java
class InvoiceDao {
    private Invoice invoice;
    
    public InvoiceDao(Invoice invoice) {
        this.invoice = invoice;
    }
    
    public void saveToDb() {
        // save to database implementation
    }
}
```
```java
class InvoicePrinter {
    private Invoice invoice;
    
    public InvoicePrinter(Invoice invoice) {
        this.invoice = invoice;
    }
    
    public void printInvoice() {
        // printing implementation
    }
}
```
Ở trong ví dụ đã tái cấu trúc, chúng ta đã chia các trách nhiệm cho class `Invoice` thành 3 class phân biệt: `Invoice`, `InvoiceDao`, và `InvoicePrinter`.

Class `Invoice` chỉ chịu trách nhiệm cho việc tính toán tổng hóa đơn, và trách nhiệm in và lưu vào database được ủy quyền cho các class khác. Nó khiến cho code được mô-đun hóa, dễ dàng hiểu, và ít có khả năng xảy ra lỗi hơn.

## Thế nào là Open-Closed Principle?

Open-Closed Principle (OCP) tuyên bố rằng **các thực thể phần mềm (các class, các module, các hàm,..) nên cho phép mở rộng nhưng không cho chỉnh sửa.** Nghĩa là hành vi của một thực thể phần mềm có thể được mở rộng mà không cần phải chỉnh sửa mã nguồn của nó.

OCP thiết yếu bởi vì nó thúc đẩy khả năng mở rộng và bảo trì của ứng dụng. Bằng cách cho phép các thực thể phần mềm có thể mở rộng mà không phải chỉnh sửa, các lập trình viên có thể thêm các chức năng mà không gặp rủi ro phá vỡ đoạn code hiện tại. Và kết quả là code có thể dễ dàng duy trì, mở rộng, và tái sử dụng.

Hãy xem lại ví dụ trước lần nữa.

```java
class InvoiceDao {
    private Invoice invoice;
    
    public InvoiceDao(Invoice invoice) {
        this.invoice = invoice;
    }

    public void saveToDb() {
        // save to database implementation
    }
}
```
Class `InvoiceDao` có một trách nhiệm duy nhất là lưu hóa đơn vào database. Nhưng, giả sử có một yêu cầu mới để lưu hóa đơn vào file chẳng hạn. Một cách để triển khai yêu cầu này có thể là chỉnh sửa lại class sẵn có `InvoiceDao` bằng việc thêm phương thức `saveToFile()`. Nhưng nó vi phạm OCP bởi vì nó chỉnh sửa đoạn code có sẵn mà đã được kiểm thử và đang hoạt động trong sản phẩm cuối.

Để tuân thủ OCP, một giải pháp tốt hơn có thể là tạo một interface `InvoiceDao` và triển khai nó dành riêng cho database và file như sau đây:
```java
interface InvoiceDao {
    public void save(Invoice invoice);
}

class DatabaseInvoiceDao implements InvoiceDao {
    @Override
    public void save(Invoice invoice) {
        // save to database implementation
    }
}

class FileInvoiceDao implements InvoiceDao {
    @Override
    public void save(Invoice invoice) {
        // save to file implementation
    }
}
```
Theo cách này, nếu có một yêu cầu mới để lưu hóa đơn vào một nơi lưu trữ dữ liệu khác, bạn có thể triển khai một `InvoiceDao` mới mà không cần phải chỉnh sửa code sẵn có. Bây giờ, interface `InvoiceDao` đã cho phép mở rộng và không cho phép chỉnh sửa, đã tuân thủ OCP.

## Thế nào là Liskov Substitution Principle?

Liskov Substitution Principle (LSP) tuyên bố rằng **bất kỳ thực thể nào của một class dẫn xuất đều có thể thay thế cho một thực thể từ class chính mà không làm ảnh hưởng tới sự đúng đắn của chương trình.**

Nói cách khác, một class dẫn xuất nên cư xử giống class chính ở trong mọi bối cảnh. Nói theo cách đơn giản hơn thì nếu class A là một class con của class B, bạn nên có khả năng thay thế B với A mà không làm phá vỡ hành vi của chương trình.

Sự quan trọng của LSP phụ thuộc vào khả năng của nó để đảm bảo rằng chương trình vẫn nhất quán và dễ dàng dự đoán khi thay thế các lớp khác nhau cho nhau. Vi phạm LSP có thể dẫn tới các hành vi không ngờ tới, các lỗi, và các vấn đề về khả năng duy trì.

Hãy xem một ví dụ.

```java
interface Bike {
    void turnOnEngine();

    void accelerate();
}
```

Ở trong ví dụ trên, interface `Bike` có 2 phương thức, `turnOnEngine()` và `accelerate()`. 2 class triển khai interface này là `Motorbike` và `Bicycle`.
```java
class Motorbike implements Bike {
    
    boolean isEngineOn;
    int speed;

    @Override
    public void turnOnEngine() {
        isEngineOn = true;
    }

    @Override
    public void accelerate() {
        speed += 5;
    }
}
```
`Motorbike` triển khai chính xác phương thức `turnOnEngine()`, là thiết lập biến `isEngineOn` thành true. Nó cũng triển khai chính xác phương thức `accelerate()` bằng việc tăng `speed` lên 5.
```java
class Bicycle implements Bike {
    
    boolean isEngineOn;
    int speed;

    @Override
    public void turnOnEngine() {
        throw new AssertionError("Không có hệ thống nào cả!");
    }

    @Override
    public void accelerate() {
        speed += 5;
    }
}
```
Tuy nhiên, class `Bicycle` sẽ báo lỗi `AssertionError` ở trong phương thức `turnOnEngine()` bởi vì nó không có động cơ. Nó nghĩa là một thực thể của `Bicycle` không thể thay thế cho một thực thể của `Bike` mà không làm phá vỡ hành vi của chương trình.

Nói cách khác, nếu class `Bicycle` được xem là một loại của interface `Bike`, thì dựa theo LSP, bất kỳ thực thể nào của `Bike` nên có khả năng thay thế được với thực thể của `Bicycle` mà không làm thay đổi tính đúng đắn của chương trình.

Nhưng trong trường hợp này, nó không đúng bởi vì `Bicycle` báo lỗi `AssertionError` trong khi cố gắng khởi động động cơ. Vì vậy, đoạn code trên vi phạm LSP.

## Thế nào là Interface Segregation Principle?
Interface Segregation Principle (ISP) tập trung vào thiết kế ra các interface mà được chỉ định cụ thể cho những thứ client cần. Nó tuyên bố rằng không có client nào bị ép phải phụ thuộc vào các phương thức mà nó không sử dụng.

Khái niệm này đề xuất rằng **thay vì việc tạo ra một interface lớn mà bao gồm tất cả các phương thức có thể, nó sẽ tốt hơn nếu tạo ra các interface nhỏ hơn, tạo ra các interface tập trung cho các trường hợp sử dụng cụ thể**. Cách tiếp cận này tạo ra các interface mạch lạc và ít phụ thuộc vào nhau hơn.

Xem xét một interface `Vehicle` sau:
```java
interface Vehicle {
    void startEngine();
    void stopEngine();
    void drive();
    void fly();
}
```
Và bạn có một class tên là `Car` mà triển khai interface `Vehicle`:
```java
class Car implements Vehicle {
    
    @Override
    public void startEngine() {
        // implementation
    }

    @Override
    public void stopEngine() {
        // implementation
    }

    @Override
    public void drive() {
        // implementation
    }

    @Override
    public void fly() {
        throw new UnsupportedOperationException("Thiết bị này không thể bay.");
    }
}
```
Ở trong ví dụ này, interface `Vehicle` không có quá nhiều phương thức. class `Car` bị ép triển khai tất cả chúng, thậm chí chúng không biết bay. Nó vi phạm ISP bởi vì interface `Vehicle` không được tách thành những interface nhỏ hơn dựa vào các chức năng liên quan.

Hãy tìm hiểu cách tuân thủ ISP ở đây. Giả sử bạn tái cấu trúc interface `Vehicle` thành các interface nhỏ hơn và tập trung vào chức năng hơn:
```java
interface Drivable {
    void startEngine();
    void stopEngine();
    void drive();
}

interface Flyable {
    void fly();
}
```
Bây giờ, bạn có thể có một class gọi là `Car` mà chỉ triển khai interface `Drivable`:
```java
class Car implements Drivable {
    @Override
    public void startEngine() {
        // implementation
    }

    @Override
    public void stopEngine() {
        // implementation
    }

    @Override
    public void drive() {
        // implementation
    }
}
```
Và cảm ơn cho ISP, bạn có thể có một class khác gọi là `Airplane` mà triển khai cả `Drivable` và `Flyable`:
```java
class Airplane implements Drivable, Flyable {
    
    @Override
    public void startEngine() {
        // implementation
    }

    @Override
    public void stopEngine() {
        // implementation
    }

    @Override
    public void drive() {
        // implementation
    }

    @Override
    public void fly() {
        // implementation
    }
}
```
Ở trong ví dụ này, bạn đã tách interface `Vehicle` thành các interface nhỏ hơn dựa vào chức năng liên quan của chúng. Nó tuân thủ ISP và tạo code của bạn linh hoạt và có khả năng duy trì hơn.

## Thế nào là Dependency Inversion Principle?
Dependency Inversion Principle (DIP) tuyên bố rằng **các mô đun cấp cao không nên phụ thuộc vào các mô đun cấp thấp, nhưng cả 2 nên phụ thuộc vào sự trừu tượng.** Sự trừu tượng không nên phụ thuộc vào chi tiết - chi tiết nên phụ thuộc vào sự trừu tượng.

Nguyên tắc này nhằm việc giảm sự phụ thuộc giữa các mô đun, tăng khả năng mô đun hóa, và khiến code dễ duy trì, kiểm thử, và mở rộng.

Ví dụ, xem xét một bối cảnh khi bạn có một class mà cần sử dụng một thực thể của một class khác. Ở trong cách tiếp cận truyền thống, class đầu tiên sẽ trực tiếp tạo ra một thực thể ở class thứ 2, dẫn tới sự gắn kết chặt chẽ giữa chúng. Nó khiến cho việc thay đổi việc triển khai ở class thứ 2 khó hơn hoặc để kiểm thử class đầu tiên một cách độc lập.

Nhưng nếu bạn áp dụng DIP, class đầu tiên sẽ phụ thuộc vào class trừu tượng của class thứ 2 thay vì trực tiếp triển khai. Nó sẽ khiến nó có khả năng dễ dàng thay đổi sự triển khai và kiểm thử class đầu tiên một cách độc lập.

Đây là một ví dụ mà vi phạm DIP:
```java
class WhetherTracker {
    private String curentConditions;
    private Emailer emailer;

    public WeatherTracker() {
        this.emailer = new Emailer();
    }

    public void setCurrentConditions(String weatherDescription) {
        this.curentConditions = weatherDescription;
        if (weatherDescription == "rainy") {
            emailer.sendEmail("It is rainy");
        }
    }
}

class Emailer {
    public void sendEmail(String message) {
        System.out.println("Email sent: " + message);
    }
}
```
Ở trong ví dụ này, class `WeatherTracker` trực tiếp tạo một thực thể của class `Emailer`, khiến cho nó liên kết chặt chẽ với phần triển khai. Nó khiến cho việc thay đổi triển khai của class `Emailer` trở nên khó hơn hoặc khó có thể kiểm thử class `WeatherTracker` một cách độc lập.

Đây là một ví dụ về cách áp dụng DIP vào code ở trên:
```java
interface Notifier {
    public void alertWeatherConditions(String weatherDescription);
}

class WeatherTracker {
    private String currentConditions;
    private Notifier notifier;

    public WeatherTracker(Notifier notifier) {
        this.notifier = notifier;
    }

    public void setCurrentConditions(String weatherDescription) {
        this.currentConditions = weatherDescription;
        if (weatherDescription == "rainy") {
            notifier.alertWeatherConditions("It is rainy");
        }
    }
}

class Emailer implements Notifier {
    public void alertWeatherConditions(String weatherDescription) {
        System.out.println("Email sent: " + weatherDescription);
    }
}

class SMS implements Notifier {
    public void alertWeatherConditions(String weatherDescription) {
        System.out.println("SMS sent: " + weatherDescription);
    }
}
```
Ở trong ví dụ này, chúng ta tạo ra một interface `Notifier` mà định nghĩa phương thức `alertWeatherConditions`. Class `WeatherTracker` bây giờ phụ thuộc vào interface thay vì class `Emailer`, khiến nó có khả năng dễ dàng thay đổi sự triển khai và kiểm thử class `WeatherTracker` một cách độc lập.

Chúng ta cũng đã tạo ra 2 triển khai của interface `Notifier`, `Emailer`, và `SMS`, để chứng minh làm thế nào bạn có thể thay đổi triển khai của class `WeatherTracker` mà không tác động đến hành vi của chúng.
## Kết luận
Trong bài viết này, bạn đã học được về các nguyên lý SOLID mà là một phần rất quan trọng của các nguyên tắc thiết kế chung.

Bằng việc áp dụng nhưng nguyên tắc này ở trong các dự án phát triển phần mềm, bạn có thể tạo ra các đoạn code mà dễ dàng duy trì, mở rộng, và thay đổi, dẫn đến ứng dụng mạnh mẽ, linh hoạt, và có khả năng tái sử dụng. Nó cũng dẫn tới sự việc cộng tác tốt hơn giữa các thành viên nhóm, vì code trở nên mô đun hóa và dễ dàng làm việc với chúng.

Nếu bạn đã đọc tới đây, cảm ơn tới tác giả và cho họ thấy sự quan tâm của bạn.

