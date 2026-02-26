import type { Request, Response } from 'express';
export declare const notificationController: {
    getNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUnreadCount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    markAsRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    markAllAsRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteNotification: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=notification.controller.d.ts.map