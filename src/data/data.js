import images from '../constants/images'

const orderData = [
    {
        icon: `${images.Tick}`,
        semigraph: `${images.GraphGreen}`,
        title: 'Total Order',
        amount: 350,
        progressIcon: `${images.Up}`,
        bgColor: "#34CAA5"
    },
    {
        icon: `${images.Rotate}`,
        semigraph: `${images.GraphRed}`,
        title: 'Total Refund',
        amount: 270,
        progressIcon: `${images.Down}`,
        bgColor: "#ED544E"
    },
    {
        icon: `${images.Cart}`,
        semigraph: `${images.GraphRed}`,
        title: 'Average Sales',
        amount: 1567,
        progressIcon: `${images.Down}`,
        bgColor: "#ED544E"
    },
    {
        icon: `${images.Coin}`,
        semigraph: `${images.GraphGreen}`,
        title: 'Total Income',
        amount: '$350.000',
        progressIcon: `${images.Up}`,
        bgColor: "#34CAA5"
    },
]

const LastOrderData = [
    {
        nameIcon: `${images.Marcus}`,
        name: "Marcus Bergson",
        date: 'Nov 15, 2023',
        amount: "$80,000",
        status: "Paid",
        invoiceIcon: `${images.Document}`
    },
    {
        nameIcon: `${images.Jaydon}`,
        name: "Jaydon Vaccaro",
        date: 'Nov 15, 2023',
        amount: "$150,000",
        status: "Refund",
        invoiceIcon: `${images.Document}`
    },
    {
        nameIcon: `${images.Corey}`,
        name: "Corey Schleifer",
        date: 'Nov 14, 2023',
        amount: "$87,000",
        status: "Paid",
        invoiceIcon: `${images.Document}`
    },
    {
        nameIcon: `${images.Cooper}`,
        name: "Cooper Press",
        date: 'Nov 14, 2023',
        amount: "$100,000",
        status: "Refund",
        invoiceIcon: `${images.Document}`
    },
    {
        nameIcon: `${images.Phillip}`,
        name: "Phillip Lubin",
        date: 'Nov 13, 2023',
        amount: "$78,000",
        status: "Paid",
        invoiceIcon: `${images.Document}`
    },
]

export { orderData, LastOrderData };
