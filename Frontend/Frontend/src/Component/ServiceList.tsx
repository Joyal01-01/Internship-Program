interface Service {
    id: number;
    name: string;
}

interface ServiceListProps {
    services: Service[];
    isLoading: boolean;
}

export default function ServiceList({ services, isLoading }: ServiceListProps) {
    if (isLoading) return <div>Loading...</div>;

    return (
        <ul>
            {services.length > 0 ? (
                services.map((service) => <li key={service.id}>{service.name}</li>)
            ) : (
                <li>No services available</li>
            )}
        </ul>
    );
}