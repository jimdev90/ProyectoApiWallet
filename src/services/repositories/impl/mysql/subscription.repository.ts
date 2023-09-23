import connector from '../../../../common/persistence/mysql.persistence';
import {Subscription} from "../../domain/subscription";
export class SubscriptionRepository {

    public async all(): Promise<Subscription[]> {

        const [rows] = await connector.execute(
            'SELECT * FROM wallet_subscription ORDER BY id DESC'
        );

        return rows as Subscription[];
    }

    public async find(id: Number): Promise<Subscription | null> {

        const [rows]: any[] = await connector.execute(
            'SELECT * FROM wallet_subscription WHERE id = ?',
            [id]
        );

        if (rows.length){
            return rows[0] as Subscription;
        }

        return null;

    }

}