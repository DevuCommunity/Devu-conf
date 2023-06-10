export const GradientText = ({
  children,
  text,
  type = 'title',
  gradientType = 'devu',
}) => {
  const gradients = {
    devu: '--t-gradient-devu',
    b: '--b-gradient',
    t: '--t-gradient',
    c: '--c-gradient',
  }

  return (
    <span
      style={{
        background: `var(${gradients[gradientType]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
      className={`fredoka ${type}`}>
      {text || children}
    </span>
  );
}
