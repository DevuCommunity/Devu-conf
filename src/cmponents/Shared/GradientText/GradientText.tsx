interface GradientTextProps {
  children: React.ReactNode;
  text?: string;
  type?: string;
  gradientType?: string;
  style?: React.CSSProperties;
}

export const GradientText = ({
  children,
  text,
  type = 'title',
  gradientType = 'devu',
  style = {}
}: GradientTextProps) => {
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
