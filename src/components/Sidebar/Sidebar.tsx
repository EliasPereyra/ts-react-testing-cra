function Sidebar({ items }: { items: { name: string; href: string }[] }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.href}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
