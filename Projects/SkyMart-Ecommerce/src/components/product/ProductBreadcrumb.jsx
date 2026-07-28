import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const ProductBreadcrumb = ({ product }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-zinc-500">
      <Link to="/products" className="hover:text-primary">
        Products
      </Link>

      <ChevronRight size={16} />

      <span className="capitalize">{product.category}</span>

      <ChevronRight size={16} />

      <span className="text-white">{product.title}</span>
    </div>
  );
};

export default ProductBreadcrumb;
