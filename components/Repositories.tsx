import styles from "../styles/components/Repositories.module.css"
import Link from "next/link"

export default function Repositories(repoData: any): JSX.Element {
    interface Repo {
        id: number,
        name: string,
        html_url: string,
        visibility: string,
        description: string | null,
        topics: string[],
        language: string,
        license: {name: string} | null,
        updated_at: string,
    }

    function capitalize(string: string) {
        return string?.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div id={styles.repositories}>
            {Object.entries(repoData).map(([repoNum, object]) => 
            {
            let repo = object as Partial<Repo>
            return(
                <div className={styles.repository} key={repo.id}>
                    <div className={styles.title}>
                        <Link href={`${repo.html_url}`} target="_blank"><h2 className={styles.name}>{repo.name}</h2></Link>
                        {repo.visibility && <div className={styles.visibility}>{capitalize(repo.visibility)}</div>}
                    </div>
                    <p className={styles.description}>{repo.description}</p>
                    {repo.topics?.map(x => <span className={styles.topics}>{x}</span>)}
                    <div className={styles.additionalInfo}>
                        {repo.language && <small className={styles.language}>{repo.language}</small>}
                        {repo.license && <small className={styles.license}>{repo.license && repo.license.name}</small>}
                        <small className={styles.updatedAt}>Updated {repo.updated_at}</small>
                    </div>
                </div>
            )
            }
            )}
        </div>
    )
}