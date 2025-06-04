import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-square" />
      <CardContent className="p-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-9 w-20" />
      </CardFooter>
    </Card>
  );
}