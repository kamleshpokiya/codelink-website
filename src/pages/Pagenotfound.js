const Pagenotfound = () => {


    // 404 Page Style
    const container = {
        color: '#444',
        margin: 0,
        font: 'normal 14px / 20px Arial, Helvetica, sans- serif',
        height: '100%',
        backgroundColor: '#fff',
    }

    const containerChild = {
        height: 'auto',
        minHeight: '100%',
    }

    const containerGrandChild = {
        textAlign: 'center',
        width: '800px',
        marginLeft: '-400px',
        position: 'absolute',
        top: '30%',
        left: '50%'
    }

    const containerGrandChildH1 = {
        margin: '0',
        fontSize: '150px',
        lineHeight: '150px',
        fontWeight: 'bold'
    }


    const containerGrandChildH2 = {
        marginTop: '20px',
        fontSize: '30px'
    }



    return (
        <body style={container}>
            <div style={containerChild}>
                <div style={containerGrandChild}>
                    <h1 style={containerGrandChildH1}>404</h1>
                    <h2 style={ containerGrandChildH2 }>Not Found</h2>
                    <p>The resource requested could not be found on this server!</p>
                </div>
            </div>
        </body >
    )
}

export default Pagenotfound
