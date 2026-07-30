---
title: "Design Pattern (P.1)"
description: "**Design patterns** là các giải pháp thông dụng cho các vấn đề thường xuất hiện trong thiết kế phần mềm."
pubDate: "Jul 30 2026"
heroImage: "/post_design_pattern_p1_img.webp"
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

