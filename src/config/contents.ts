import { env } from "@/env";
import { type ContentSection, type HeroHeader } from "@/types/contents";

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Chào mừng đến với`,
  subheader: `Nền tảng đặt bàn, quản lý nhà hàng, quán ăn toàn quốc.`,
  // image: `/hero-img.webp`,
  image: `${env.S3_URL}/download/1711647204486-hero-img.webp`,
};

export const featureCards: ContentSection = {
  header: `Những tính năng chính`,
  subheader: `hChip cung cấp những dịch vụ chính sau`,
  content: [
    {
      text: `Đặt bàn`,
      subtext: `Tính năng đặt bàn từ nhiều nhà hàng của hChip giúp bạn dễ dàng đặt chỗ cho bữa ăn tại nhiều địa điểm khác nhau chỉ trong vài bước đơn giản. Bạn có thể dễ dàng tìm kiếm và đặt bàn từ danh sách các nhà hàng đối tác với sự linh hoạt trong việc chọn thời gian và số lượng khách. Với tính năng này, việc sắp xếp bữa tiệc hoặc thưởng thức một buổi tối ngoài trời trở nên dễ dàng và tiện lợi hơn bao giờ hết.`,
      icon: "nextjs",
    },
    {
      text: `Quản lý nhà hàng`,
      subtext: `Tính năng quản lý nhà hàng của chúng tôi giúp bạn dễ dàng quản lý menu, đơn hàng và lịch trình của nhà hàng một cách hiệu quả. Tính năng này cung cấp các công cụ linh hoạt để tùy chỉnh menu, cập nhật thông tin sản phẩm và quản lý kho hàng một cách thuận tiện. Bên cạnh đó, bạn cũng có thể theo dõi đơn hàng, xác nhận đơn và quản lý lịch trình giao hàng một cách thông minh từ bất kỳ đâu chỉ với một thiết bị kết nối internet.`,
      icon: "shadcnUi",
    },
    {
      text: `Tính toán doanh thu`,
      subtext: `Tính năng quản lý doanh thu của chúng tôi cung cấp cái nhìn tổng quan về hiệu suất kinh doanh của bạn thông qua báo cáo và thống kê chi tiết. Bạn có thể theo dõi doanh số bán hàng, lợi nhuận, và xu hướng tiêu dùng để đưa ra các chiến lược kinh doanh hiệu quả. Ngoài ra, tính năng này cũng hỗ trợ quản lý chi phí, thu nhập và các yếu tố tài chính khác để giúp bạn tối ưu hóa hiệu suất kinh doanh của mình.`,
      icon: "vercel",
    },
  ],
};

export const features: ContentSection = {
  header: `Lợi ích`,
  subheader: `Tại sao nên sử dụng hChip`,
  image: `/performance.png`,
  content: [
    {
      text: `Tiện lợi`,
      subtext: `Có thể tìm nhà hàng và đặt bàn ở mọi nơi`,
      icon: "fileSearch",
    },
    {
      text: `Hiệu quả`,
      subtext: `Giúp các nhà hàng có thể quản lý công việc hiệu quả`,
      icon: "barChart",
    },
    {
      text: `Tiết kiệm thời gian và chi phí`,
      subtext: `Không còn cần quá nhiều nhân công để có thể vận hành nhà hàng của bạn`,
      icon: "settings",
    },
  ],
};
