#!/bin/bash

# Create directory if it doesn't exist
mkdir -p public/images/menu

# Array of URLs
urls=(
"https://bethuihanoi.vn/wp-content/uploads/2025/07/558951204_122141728874908125_8158128659297009_n-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-cuon-cai-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-da-chien-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-la-lot-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-sa-te-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-tai-chanh-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-thui-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-xao-xa-ot-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-xong-bia-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-xong-ruou-vang-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/chao-be-dau-xanh-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-be-nhung-me-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-rieu-cua-bap-be-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-xi-quach-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/sach-be-xao-khe-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/suon-be-nuong-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-da-chien-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-la-lot-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-sa-te-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/suon-be-nuong-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-be-nhung-me-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-rieu-cua-bap-be-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-xi-quach-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ba-chi-nuong-600x349.jpeg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ba-chi-rang-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/bun-chay-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/canh-cua-600x450.webp"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ga-chien-mam-1-2-con-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ga-hap-1-con-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ga-rang-muoi-1-2-con-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ga-xao-gung-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/lau-ca-nganh-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/thit-dai-nuong-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/tom-song-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/cach-lam-cai-thia-xao-toi-scaled-1-600x400.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/com-rang-be-nho-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/com-rang-be-to-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/dau-ran-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/dau-tam-hanh-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/khoai-tay-chien-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/mong-toi-xao-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/my-xao-be-nho-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/my-xao-be-to-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ngo-chien-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/rau-muong-xao-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/bia-ha-noi-600x330.webp"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/bia-tiger-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/bia-truc-bach-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/nuoc-cam-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/nuoc-suoi-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/pepsi-coca-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ruou-dong-dong-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ruou-man-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ruou-nep-oi-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/tra-da-nong-au-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ba-chi-nuong-600x349.jpeg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-nuong-da-chien-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-thui-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-xong-bia-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/be-xong-ruou-vang-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/bun-chay-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/lau-ca-nganh-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2024/03/lau-xi-quach-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/ruou-nep-oi-600x450.jpg"
"https://bethuihanoi.vn/wp-content/uploads/2023/12/thit-dai-nuong-600x450.jpg"
)

# Remove duplicates and sort
# unique_urls=($(printf '%s\n' "${urls[@]}" | sort -u))

# echo "Downloading ${#unique_urls[@]} unique images..."
# echo ""

# Download each image
for url in "${urls[@]}"; do
  # Extract filename from URL
  filename=$(basename "$url")

  # Download the image
  curl -s -o "public/images/menu/$filename" "$url"

  # Print the new path
  echo "/images/menu/$filename"
done

echo ""
echo "Download complete! Downloaded ${#urls[@]} images."
