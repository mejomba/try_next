function storeLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            store custom layout
            {children}
        </div>
    );
}

export default storeLayout;