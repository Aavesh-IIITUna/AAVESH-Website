import PropTypes from 'prop-types';

// Reusable Heading component to keep section titles consistent site-wide
// Defaults chosen to match existing design: uppercase, wide tracking, light weight, gray text
const sizeMap = {
  sm: 'text-2xl sm:text-3xl md:text-4xl',
  md: 'text-3xl sm:text-4xl md:text-5xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl',
};

export default function Heading({
  as: Tag = 'h1',
  align = 'left',
  size = 'md',
  sizeClass,
  uppercase = true,
  colorClass = 'text-gray-200',
  className = '',
  children,
}) {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const base = `${uppercase ? 'uppercase' : ''} tracking-[0.2em] font-light`;
  const sizeClasses = sizeClass || sizeMap[size] || sizeMap.md;
  return (
    <Tag className={`${sizeClasses} ${base} ${colorClass} ${alignClass} ${className}`.trim()}>{children}</Tag>
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  sizeClass: PropTypes.string,
  uppercase: PropTypes.bool,
  colorClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
