

const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="card mt-5 w-full bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <h2 className="card-title"> What is an access token and refresh token ? How do they work and where should we store them on the client-side ?</h2>
                        <p>An access token and a refresh token are commonly used in authorization. Using an access token, you can check that the user has permissions for some resources or not, and access tokens have some expiration time. On the other hand, a refresh token is used to generate a new access token if your current one expires. You can store access tokens in local storage or HTTP-only cookies, but it is most secure to store access tokens in memory.</p>
                    </div>
                </div>
                <div className="card w-full mt-5 bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases ?</h2>
                        <p>
                            <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
                            <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="card w-full my-5 bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <h2 className="card-title"> What is express js? What is Nest JS ?</h2>
                        <p>Express.js is a minimalist web application framework for Node.js, and NestJS is a powerful, full-featured web application framework built with TypeScript. Express.js is commonly used for building simple and flexible apps, and Nest.js is used for building large, complex applications.
                        </p>
                    </div>
                </div>
                <div className="card w-full my-5 bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <h2 className="card-title"> What is MongoDB aggregate and how does it work ?</h2>
                        <p> MongoDB aggregate is a powerful tool for performing advanced data processing and analysis. You can match, find, group, and sort data using this tool, and you can also limit and skip data. MongoDB processes the documents in the collection sequentially as part of chaining. The final output of chaining is the result of the last stage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;