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

## **Vậy thế nào là Single Responsibility Principle?**

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
