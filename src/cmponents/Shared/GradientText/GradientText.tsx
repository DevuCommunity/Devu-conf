export const GradientText = ({
  children,
  text,
  type = 'title',
  gradientType = 'devu',
  style = {}
}) => {
  const gradients = {
    devu: '--t-gradient-devu',
    b: '--b-gradient',
    t: '--t-gradient',
    c: '--c-gradient',
  }

  const fontSizes = {
    title: '300px'
  }

  return (
    <span
      style={{
        fontSize: fontSizes[type],
        background: `var(${gradients[gradientType]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        wordWrap: 'break-word',
        ...style
      }}
      className={`fredoka`}>
      {text || children}
    </span>
  );
}
