'use client';

export default function About() {
    return (
        <section id="about" className="py-20 px-6 text-gray-400">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">About Me</h2>
                <p className="text-lg md:text-xl mb-6 text">
                    My name is Oleksii. I'm DevOps Engineer passionate about infrastructure automation, CI/CD, cloud-native and bare-metal technologies. I help teams shipping their products faster, more reliably and with confidence
                </p>
                <p className="text-md md:text-lg leading-relaxed">
                    My stack includes:
                    <br />
                    <span className="font-medium">
                        Jenkins, GitLabCI, Linux, Python, Bash, Azure, Docker, Kubernetes, Terraform, Ansible, Prometheus, Grafana, Zabbix
                    </span>
                    .
                    <br />
                    I also manage my own VPS and DNS where I self-host various services and experiments. This portfolio is a part of this environment.
                </p>
            </div>
        </section>
    );
}