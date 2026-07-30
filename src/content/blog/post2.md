---
title: "Design Pattern (P.1)"
description: "**Design patterns** là các giải pháp thông dụng cho các vấn đề thường xuất hiện trong thiết kế phần mềm."
pubDate: "Jul 30 2026"
heroImage: "/post_design_pattern_p1_img.webp"
tags: ["khái niệm", "Design Pattern"]
---
[nguồn: https://refactoring.guru/design-patterns/, lần cuối truy cập: **30/7/2026**]

**Design Patterns** giống như những bản thiết kế được tạo sẵn mà bạn có thể tùy chỉnh để giải quyết một vấn đề thiết kế lặp lại trong code của bạn.

Bạn không thể chỉ tìm kiếm một pattern và sao chép nó vào chương trình của bạn, cách mà bạn có thể làm với các hàm và thư viện sẵn có. Các pattern không phải là một đoạn code cụ thể, nhưng là một khái niệm chung để giải quyết một vấn đề cụ thể. Bạn có thể áp dụng chi tiết mẫu thiết kế và triển khai một giải pháp mà phù hợp với thực tế của chương trình của bạn.

Các pattern thường bị nhầm lẫn với các giải thuật, vì cả 2 khái niệm đều mô tả các giải pháp chung cho những vấn đề đã được biết trước. Trong khi một giải thuật luôn định nghĩa một tập rõ ràng của hành động mà có thể đạt được một mục tiêu nào đó, một pattern thì sẽ là sự mô tả cấp cao hơn của một giải pháp. Code của một pattern áp dụng cho 2 chương trình khác nhau có thể khác nhau.

Một điểm tương đồng với giải thuật là một bản hướng dẫn nấu ăn: cả 2 đều có các bước rõ ràng để đạt được mục tiêu cụ thể. Mặt khác, một pattern thì giống với bản vẽ hơn: bạn có thể thấy kết quả là gì và nó có tính năng gì, nhưng việc triển khai chính xác nó là gì thì phụ thuộc vào bạn. 

## Pattern bao gồm những gì?
Hầu hết pattern đều được mô tả rất cụ thể vì vậy người dùng có thể tái tạo chúng trong nhiều bối cảnh khác nhau. Sau đây là các phần mà thường xuất hiện trong một mô tả pattern:
- **Intent - Ý định** của một pattern tóm tắt mô tả cả vấn đề và cách giải quyết.
- **Motivation - Động lực thúc đẩy** sẽ giải thích rõ hơn về vấn đề và cách giải quyết mà pattern có thể làm.
- **Structure - Cấu trúc** của các class cho thấy các thành phần của pattern và cách chúng liên hệ với nhau.
- **Code example - Code ví dụ** dùng một trong những ngôn ngữ lập trình phổ biến để khiến người dùng có thể dễ dàng nắm bắt được ý tưởng đằng sau pattern đó.
Một số danh sách pattern khác có thể chứa thêm những thông tin hữu ích khác như là phạm vi hoạt động của pattern, các bước triển khai và mối liên hệ với các pattern khác.
## Lịch sử của pattern
Ai đã phát minh ra các pattern? Khá hay nhưng không phải là câu hỏi khá thường xuyên. Design patterns không phải là các khái niệm phức tạp, không rõ ràng - mà gần như là ngược lại. Patterns thường là các giải pháp chung cho các vấn đề phổ biến trong thiết kế hướng đối tượng. Khi một giải pháp được lặp lại hết lần này đến lần khác trong nhiều dự án khác nhau, một ai đó thậm chí đã đặt tên cho nó và mô tả chi tiết giải pháp. Đó đơn giản là cách một pattern được khám phá.

Khái niệm của các pattern lần đầu được mô tả bởi Christopher Alexander trong **A Pattern Language: Towns, Building, Construction**. Quyển sách mô tả một "ngôn ngữ" cho việc thiết kế môi trường đô thị. Các đơn vị của ngôn ngữ này là các pattern. Chúng có thể được mô tả là chiều cao cửa sổ nên là bao nhiêu, một ngôi nhà nên có bao nhiêu tầng, diện tích khu vực cây xanh ở một khu dân cư nên lớn thế nào,..

Ý tưởng đã được 4 tác giả tiếp nhận: Erich Gamma, John Vlissides, Ralph Johnson, và Richard Helm. Vào năm 1994, chúng được công bố với tên **Design Patterns: Elements of Reusable Object-Oriented Software**, trong đó họ đã áp dụng các khái niệm về các design pattern vào lập trình. Quyển sách bao gồm 23 pattern giải quyết nhiều vấn đề khác nhau của thiết kế hướng đối tượng và trở thành quyển sách bán chạy nhất trong thời gian rất ngắn. Bởi vì tên quyển sách khá dài nên mọi người thường gọi nó là "the book by the gang of four" mà được rút ngắn hơn cho đơn giản là "the GoF book".

Kể từ đó, hàng chục các pattern hướng đối tượng khác đã được phát hiện. "Cách tiếp cận pattern" trở nên rất phổ biến trong các lĩnh vực lập trình khác, vì vậy hiện nay rất nhiều pattern khác tồn tại bên ngoài thiết kế hướng đối tượng.
## Tại sao tôi nên học các pattern?
Sự thật là bạn có thể làm việc như là một lập trình viên trong nhiều năm mà không cần biết về mẫu pattern nào cả. Nhiều người vẫn làm vậy. Thậm chí có cả trường hợp bạn có thể triển khai một vài pattern mà thậm chí còn không biết tới tên của nó. Vì vậy tại sao bạn cần phải dành thời gian để học chúng?
- Design patterns là một bộ công cụ của **giải pháp đã được thử và kiểm nghiệm** cho các vấn đề thường gặp trong thiết kế ứng dụng. Thậm chí nếu bạn chưa từng gặp phải các vấn đề đó, việc hiểu biết pattern vẫn hữu dụng vì nó dạy bạn cách giải quyết đủ loại vấn đề sử dụng các khái niệm của thiết kế hướng đối tượng.
- Design patterns định nghĩa một ngôn ngữ thông dụng mà bạn và các thành viên trong nhóm có thể sử dụng để giao tiếp hiệu quả hơn. Bạn có thể nói, "Ôi, chỉ cần sử dụng Singleton cho vấn đề đó," và mọi người sẽ hiểu ý tưởng đằng sau sự gợi ý của bạn. Không cần phải giải thích thế nào là singleton nếu bạn biết pattern và tên của nó.
## Phê bình của các pattern
Dường như chỉ có những người lười biếng mới chưa từng phê bình các mẫu thiết kế. Hãy nhìn vào các đoạn tranh luận khá phổ biến chống lại việc sử dụng các pattern.
#### Giải pháp tạm bợ cho một ngôn ngữ lập trình yếu
Thường thì việc cần đến các pattern chỉ xuất hiện khi mọi người chọn một ngôn ngữ lập trình hoặc một công nghệ mà thiếu mức độ trừu tượng cần thiết. Trong trường hợp này, các pattern trở thành một giải pháp tạm bợ cho ngôn ngữ thật sự cần nó một siêu khả năng.

Ví dụ, pattern **Strategy** có thể được triển khai với một hàm vô danh đơn giản (lambda) trong hầu hết các ngôn ngữ lập trình hiện đại.
#### Các giải pháp không hiệu quả
Các Pattern cố gắng hệ thống hóa các cách tiếp cận mà đã được sử dụng rộng rãi. Sự thống nhất này được nhiều người xem như là giáo điều, và áp dụng nó một cách máy móc mà không thay đổi sao cho phù hợp với bối cảnh dự án của họ.
#### Sử dụng không chính đáng
```java
Nếu tất cả những gì bạn có là một cái búa, thì tất cả mọi thứ đều nhìn giống cái đinh.
```
Đây là vấn đề thường gặp mà nhiều người mới bắt đầu làm quen với các pattern. Khi đã được học về các pattern, họ cố gắng áp dụng chúng vào bất cứ mọi nơi, thậm chí là trong các trường hợp mà những cách làm đơn giản cũng làm tốt.
