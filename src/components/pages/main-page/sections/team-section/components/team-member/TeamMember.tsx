import { FC } from 'react';
import styles from './TeamMember.module.scss';

interface TeamMemberProps {
    name: string;
    position: string;
    avatarUrl: string;
}

const TeamMember: FC<TeamMemberProps> = ({ name, position, avatarUrl }) => {
    return (
        <div className={styles.member}>
            <img src={avatarUrl} alt={`${name}'s avatar`} className={styles.avatar} />
            <p>{position}</p>
            <h5>{name}</h5>
        </div>
    );
};

export default TeamMember;
